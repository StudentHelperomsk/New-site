import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, ArrowLeft, ArrowRight, FileText, X } from 'lucide-react'
import { examples } from '../../content/landing'
import SectionHeading from './SectionHeading'

export default function ExamplesSection() {
  const [selected, setSelected] = useState(null)
  const [page, setPage] = useState(0)
  const pages = [[examples[2], examples[1]], [examples[0], examples[3]]]
  const dialog = useRef(null)

  useEffect(() => {
    if (!selected) return
    const element = dialog.current
    element.showModal()
    return () => element.close()
  }, [selected])

  return <section className="landing-section examples-section" id="examples" aria-labelledby="examples-title">
    <SectionHeading id="examples-title" eyebrow="ОТ ЗАДАЧИ К РЕЗУЛЬТАТУ" title={<>За каждой работой —<br />чья-то задача.</>}>
      <div className="gallery-controls"><span aria-live="polite">0{page + 1} / 02</span><button type="button" onClick={() => setPage(current => (current + pages.length - 1) % pages.length)} aria-label="Предыдущие примеры"><ArrowLeft size={20} /></button><button type="button" onClick={() => setPage(current => (current + 1) % pages.length)} aria-label="Следующие примеры"><ArrowRight size={20} /></button></div>
    </SectionHeading>
    <div className="examples-grid" key={page}>
      {pages[page].map(example => <button type="button" className="example-card" key={example.slug} onClick={() => setSelected(example)}>
        <span className={`example-image${example.landscape ? ' is-landscape' : ''}`}><img src={`/assets/examples/${example.slug}.webp`} alt={example.alt} loading="lazy" width="760" height={example.landscape ? '538' : '1075'} /><span className="example-open"><ArrowUpRight size={20} /></span></span>
        <span className="example-copy"><span className="example-category">{example.category}</span><strong>{example.title}</strong><span className="example-format"><FileText size={13} />Посмотреть работу</span></span>
      </button>)}
    </div>
    <div className="gallery-footer"><p>Настоящие работы. Можно открыть и рассмотреть.</p><a className="text-action" href="/examples/">Весь архив работ <ArrowUpRight size={17} /></a></div>
    <dialog className="work-dialog" ref={dialog} onCancel={() => setSelected(null)} onClose={() => setSelected(null)} onClick={event => { if (event.target === event.currentTarget) setSelected(null) }} aria-labelledby="work-dialog-title">
      {selected && <div className="work-dialog-inner">
        <div className="work-dialog-header"><div><span className="example-category">{selected.category}</span><h3 id="work-dialog-title">{selected.title}</h3></div><button className="dialog-close" onClick={() => setSelected(null)} aria-label="Закрыть пример"><X size={22} /></button></div>
        <div className="work-dialog-preview"><img src={`/assets/examples/${selected.slug}.webp`} alt={selected.alt} /></div>
        <div className="work-dialog-footer"><span>Предпросмотр страницы работы</span><a className="button button-dark" href={`/assets/examples/pdf/${selected.slug}.pdf`} target="_blank" rel="noreferrer">Открыть полный PDF <ArrowUpRight size={17} /></a></div>
      </div>}
    </dialog>
  </section>
}
