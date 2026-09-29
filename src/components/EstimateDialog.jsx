import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import EstimateForm from './EstimateForm'

export default function EstimateDialog({ open, onClose, description, onDescriptionChange }) {
  const dialog = useRef(null)
  const backdropPress = useRef(false)
  const drag = useRef(null)
  const suppressClick = useRef(false)
  const closeTimer = useRef(null)

  useEffect(() => () => clearTimeout(closeTimer.current), [])

  useEffect(() => {
    const element = dialog.current
    clearTimeout(closeTimer.current)
    element.style.removeProperty('--sheet-drag')
    element.classList.remove('is-dragging')
    drag.current = null
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

  const startDrag = event => {
    if (event.button !== 0 || !window.matchMedia('(max-width: 600px)').matches) return
    event.preventDefault()
    drag.current = { y: event.clientY, time: performance.now(), distance: 0 }
    suppressClick.current = false
    event.currentTarget.setPointerCapture(event.pointerId)
    dialog.current.classList.add('is-dragging')
  }
  const moveDrag = event => {
    if (!drag.current) return
    drag.current.distance = Math.max(0, event.clientY - drag.current.y)
    if (Math.abs(event.clientY - drag.current.y) > 5) suppressClick.current = true
    dialog.current.style.setProperty('--sheet-drag', `${drag.current.distance}px`)
  }
  const endDrag = (event, cancelled = false) => {
    const gesture = drag.current
    if (!gesture) return
    gesture.distance = Math.max(0, event.clientY - gesture.y)
    if (gesture.distance > 5) suppressClick.current = true
    drag.current = null
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId)
    const element = dialog.current
    element.classList.remove('is-dragging')
    const velocity = gesture.distance / Math.max(1, performance.now() - gesture.time)
    if (!cancelled && (gesture.distance > 90 || (gesture.distance > 35 && velocity > .6))) {
      element.style.setProperty('--sheet-drag', `${element.clientHeight + 30}px`)
      closeTimer.current = setTimeout(onClose, window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 180)
    } else element.style.removeProperty('--sheet-drag')
  }

  return <dialog ref={dialog} className="estimate-dialog" aria-labelledby="estimate-title"
    onCancel={onClose} onClose={onClose}
    onPointerDown={event => { backdropPress.current = event.target === event.currentTarget && outsideDialog(event) }}
    onClick={event => { if (backdropPress.current && event.target === event.currentTarget && outsideDialog(event)) onClose(); backdropPress.current = false }}>
    <button type="button" className="estimate-drag-handle" aria-label="Потяните вниз, чтобы закрыть форму"
      onDragStart={event => event.preventDefault()} onPointerDown={startDrag} onPointerMove={moveDrag} onPointerUp={event => endDrag(event)} onPointerCancel={event => endDrag(event, true)}
      onClick={event => { if (event.detail === 0 && !suppressClick.current) onClose(); suppressClick.current = false }}><span /></button>
    <button type="button" className="estimate-close" aria-label="Закрыть форму заявки" onClick={onClose}><X size={21} /></button>
    <EstimateForm description={description} onDescriptionChange={onDescriptionChange} />
  </dialog>
}
