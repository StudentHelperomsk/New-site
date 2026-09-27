import { useRef, useState } from 'react'
import { ArrowRight, FileText, LockKeyhole, Paperclip, X } from 'lucide-react'

export default function EstimateForm({ description, onDescriptionChange }) {
  const [file, setFile] = useState(null)
  const [feedback, setFeedback] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const fileInput = useRef(null)
  const changeFile = event => {
    setSubmitted(false)
    const next = event.target.files?.[0]
    if (next && next.size > 20 * 1024 * 1024) {
      setFeedback('Файл слишком большой. Выберите файл до 20 МБ.')
      event.target.value = ''
      setFile(null)
      return
    }
    setFeedback('')
    setFile(next || null)
  }
  const submit = event => {
    event.preventDefault()
    setSubmitted(true)
    setFeedback('Задание подготовлено. Отправка заявки появится после подключения сервиса — сейчас данные остаются только на этой странице.')
  }
  return <aside className="estimate-card" id="estimate" aria-labelledby="estimate-title">
    <div className="form-topline"><span className="form-step">01 / ПЕРВЫЙ ШАГ</span><span className="form-time">≈ 15 минут</span></div>
    <h2 id="estimate-title" tabIndex={-1}>Узнайте стоимость<br /> вашей работы</h2>
    <form onSubmit={submit} onChange={() => { if (submitted) { setSubmitted(false); setFeedback('') } }}>
      <label htmlFor="description">Опишите ваше задание</label>
      <textarea id="description" name="description" placeholder="Тема, требования и желаемый срок" value={description} onChange={event => onDescriptionChange(event.target.value)} maxLength={3000} required rows={3} />
      <div className="attachment-row">
        <input ref={fileInput} className="sr-only" tabIndex={-1} type="file" id="attachment" onChange={changeFile} />
        {file ? <div className="attached-file"><FileText size={15} /><span title={file.name}>{file.name}</span><button type="button" aria-label="Удалить файл" onClick={() => { setFile(null); fileInput.current.value = ''; setFeedback(''); setSubmitted(false) }}><X size={15} /></button></div> : <><button type="button" className="attach-button" onClick={() => fileInput.current.click()}><Paperclip size={15} />Прикрепить файл</button><span className="optional">до 20 МБ</span></>}
      </div>
      <label className="consent-label" htmlFor="privacy-consent">
        <input id="privacy-consent" name="privacyConsent" type="checkbox" required />
        <span>Согласен на <a href="/consent/" target="_blank" rel="noreferrer">обработку персональных данных</a> на условиях <a href="/privacy/" target="_blank" rel="noreferrer">политики</a></span>
      </label>
      <button type="submit" className="button button-dark calculate-button">Получить расчёт <ArrowRight size={17} /></button>
      {feedback && <p className={`form-feedback ${submitted ? 'is-prepared' : ''}`} role="status">{feedback}</p>}
      <p className="privacy-note"><LockKeyhole size={12} />Ваши данные в безопасности</p>
    </form>
  </aside>
}
