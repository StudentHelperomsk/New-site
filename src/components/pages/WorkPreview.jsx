import { useEffect, useRef } from 'react'
import { ArrowUpRight, X } from 'lucide-react'

export default function WorkPreview({ work, onClose }) {
  const dialog = useRef(null)
  useEffect(() => {
    if (!work) return
    const element = dialog.current
    element.showModal()
    return () => element.close()
  }, [work])
  return <dialog className="work-dialog library-dialog" ref={dialog} onCancel={onClose} onClose={onClose} onClick={event => { if (event.target === event.currentTarget) onClose() }} aria-labelledby="library-dialog-title">
    {work && <div className="work-dialog-inner"><div className="work-dialog-header"><div><span className="example-category">{work.category}</span><h3 id="library-dialog-title">{work.title}</h3></div><button className="dialog-close" type="button" onClick={onClose} aria-label="Закрыть пример"><X size={22} /></button></div><div className="work-dialog-preview"><img src={work.image} alt={work.alt} width={work.width} height={work.height} /></div><div className="work-dialog-footer"><span>Предпросмотр страницы работы</span><a className="button button-dark" href={work.pdf} target="_blank" rel="noreferrer">Открыть полный PDF <ArrowUpRight size={18} /></a></div></div>}
  </dialog>
}
