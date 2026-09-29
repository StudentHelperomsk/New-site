import { siteUrl } from '../lib/siteUrl.js'
import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, CreditCard, LockKeyhole } from 'lucide-react'
import { managerUrl } from '../content/landing'
import { Breadcrumbs } from '../components/pages/PageParts'

let sdkPromise
function loadPaymentSdk() {
  if (window.PaymentIntegration) return Promise.resolve(window.PaymentIntegration)
  if (!sdkPromise) sdkPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = 'https://integrationjs.t-static.ru/integration.js'
    script.async = true
    script.onload = () => window.PaymentIntegration ? resolve(window.PaymentIntegration) : reject(new Error('Не удалось загрузить оплату. Обновите страницу.'))
    script.onerror = () => { sdkPromise = null; script.remove(); reject(new Error('Не удалось загрузить СБП. Проверьте соединение и обновите страницу.')) }
    document.head.appendChild(script)
  })
  return sdkPromise
}
async function paymentConfig(signal) {
  const id = new URLSearchParams(window.location.search).get('payment')
  if (!id || !/^[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(id)) throw new Error('Ссылка на оплату некорректна. Запросите новую у менеджера.')
  const response = await fetch(`https://app.studenthelper.ru/api/v1/finance/tbank/sbp/${encodeURIComponent(id)}/config/`, { signal, credentials: 'omit', referrerPolicy: 'no-referrer' })
  if (!response.ok) throw new Error('Ссылка не найдена или больше недоступна. Запросите новую у менеджера.')
  const config = await response.json()
  if (!Number.isFinite(Number(config.amount)) || Number(config.amount) <= 0 || !config.terminalKey || !config.paymentUrl) throw new Error('Не удалось получить данные платежа. Обратитесь к менеджеру.')
  return config
}

export default function PaymentPage() {
  const container = useRef(null)
  const [payment, setPayment] = useState(null)
  const [message, setMessage] = useState('Проверяем ссылку на оплату…')
  const [error, setError] = useState(false)
  useEffect(() => {
    const controller = new AbortController()
    const mount = document.createElement('div')
    container.current.appendChild(mount)
    paymentConfig(controller.signal).then(async config => {
      if (controller.signal.aborted) return
      setPayment(config)
      setMessage('Загружаем выбор банка…')
      const sdk = await loadPaymentSdk()
      if (controller.signal.aborted) return
      const integration = await sdk.init({ terminalKey: config.terminalKey, product: 'eacq', features: { payment: {} } })
      if (controller.signal.aborted) return
      await integration.payments.setPaymentStartCallback(async () => config.paymentUrl)
      const widget = await integration.payments.create('student-helper-sbp', {})
      if (controller.signal.aborted) return
      await widget.mount(mount)
      await widget.updateWidgetTypes(['sbp'])
      if (!controller.signal.aborted) setMessage('Выберите банк для оплаты через СБП.')
    }).catch(reason => {
      if (controller.signal.aborted) return
      setError(true)
      setMessage(reason.message || 'Не удалось загрузить СБП. Обратитесь к менеджеру.')
    })
    return () => { controller.abort(); mount.remove() }
  }, [])
  return <><Breadcrumbs items={[{ label: 'Оплата через СБП' }]} /><section className="payment-page"><span className="payment-icon"><CreditCard size={32} /></span><span className="support-eyebrow">STUDENT HELPER</span><h1>Оплата через СБП</h1>{payment && <><p>{payment.description || 'Оплата услуг Student Helper'}</p><strong className="payment-amount">{new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(Number(payment.amount))}</strong></>}<div ref={container} className="payment-widget" /><p className={`payment-message${error ? ' is-error' : ''}`} role="status">{message}</p><p>Обычно предоплата составляет 25%. Остаток оплачивается после проверки и согласования варианта в PDF с водяным знаком. После окончательной оплаты передаём работу без водяных знаков и все исходные файлы. Условия оплаты согласуем заранее.</p><span className="payment-caption"><LockKeyhole size={15} />Платёж подтверждается банком</span><a className="text-action" href={siteUrl(managerUrl)} target="_blank" rel="noreferrer">Помощь с оплатой <ArrowUpRight size={17} /></a></section></>
}
