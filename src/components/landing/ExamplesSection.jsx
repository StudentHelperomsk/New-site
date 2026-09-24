import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, FileText, X } from 'lucide-react'
import { examples } from '../../content/landing'
import SectionHeading from './SectionHeading'

export default function ExamplesSection() {
  const [selected, setSelected] = useState(null)
  const dialog = useRef(null)

  useEffect(() => {
    if (!selected) return
    const element = dialog.current
    element.showModal()
    return () => element.close()
  }, [selected])

  return <section className="landing-section examples-section" id="examples" aria-labelledby="examples-title">
    <SectionHeading id="examples-title" eyebrow="ПРИМЕРЫ РАБОТ" title={<>Можно посмотреть.<br />И составить своё мнение.</>} description="Реальные работы из нашего портфолио. Откройте пример, чтобы рассмотреть оформление и содержание.">
      <a className="text-action" href="https://studenthelper.ru/examples/" target="_blank" rel="noreferrer">Весь архив работ <ArrowUpRight size={17} /></a>
    </SectionHeading>
    <div className="examples-grid">
      {examples.map(example => <button className="example-card" key={example.slug} onClick={() => setSelected(example)}>
        <span className={`example-image${example.landscape ? ' is-landscape' : ''}`}><img src={`/assets/examples/${example.slug}.webp`} alt={example.alt} loading="lazy" width="760" height={example.landscape ? '538' : '1075'} /><span className="example-open"><ArrowUpRight size={20} /></span></span>
        <span className="example-copy"><span className="example-category">{example.category}</span><strong>{example.title}</strong><span className="example-format"><FileText size={13} />Посмотреть работу</span></span>
      </button>)}
    </div>
    <dialog className="work-dialog" ref={dialog} onCancel={() => setSelected(null)} onClose={() => setSelected(null)} onClick={event => { if (event.target === event.currentTarget) setSelected(null) }} aria-labelledby="work-dialog-title">
      {selected && <div className="work-dialog-inner">
        <div className="work-dialog-header"><div><span className="example-category">{selected.category}</span><h3 id="work-dialog-title">{selected.title}</h3></div><button className="dialog-close" onClick={() => setSelected(null)} aria-label="Закрыть пример"><X size={22} /></button></div>
        <div className="work-dialog-preview"><img src={`/assets/examples/${selected.slug}.webp`} alt={selected.alt} /></div>
        <div className="work-dialog-footer"><span>Предпросмотр страницы работы</span><a className="button button-dark" href={`https://studenthelper.ru/assets/examples/pdf/${selected.slug}.pdf`} target="_blank" rel="noreferrer">Открыть полный PDF <ArrowUpRight size={17} /></a></div>
      </div>}
    </dialog>
  </section>
}
