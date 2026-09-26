import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import EstimateForm from './EstimateForm'

export default function EstimateDialog({ open, onClose, description, onDescriptionChange }) {
  const dialog = useRef(null)
  const backdropPress = useRef(false)

  useEffect(() => {
    const element = dialog.current
    if (!open) {
      if (element.open) element.close()
      return
    }
    element.showModal()
    // Focus the heading so opening the form does not summon a mobile keyboard.
    element.querySelector('#estimate-title').focus({ preventScroll: true })
    const previousOverflow = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'
    return () => { document.documentElement.style.overflow = previousOverflow }
  }, [open])

  const outsideDialog = event => {
    const bounds = event.currentTarget.getBoundingClientRect()
    return event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom
  }

  return <dialog ref={dialog} className="estimate-dialog" aria-labelledby="estimate-title"
    onCancel={onClose} onClose={onClose}
    onPointerDown={event => { backdropPress.current = event.target === event.currentTarget && outsideDialog(event) }}
    onClick={event => { if (backdropPress.current && event.target === event.currentTarget && outsideDialog(event)) onClose(); backdropPress.current = false }}>
    <button type="button" className="estimate-close" aria-label="Закрыть форму заявки" onClick={onClose}><X size={21} /></button>
    <EstimateForm description={description} onDescriptionChange={onDescriptionChange} />
  </dialog>
}
