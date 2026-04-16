import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      if (dot.current) {
        dot.current.style.left = e.clientX + 'px'
        dot.current.style.top = e.clientY + 'px'
      }
      if (ring.current) {
        ring.current.style.left = e.clientX + 'px'
        ring.current.style.top = e.clientY + 'px'
      }
    }

    const onEnter = () => {
      dot.current?.classList.add('hovered')
      ring.current?.classList.add('hovered')
    }
    const onLeave = () => {
      dot.current?.classList.remove('hovered')
      ring.current?.classList.remove('hovered')
    }

    window.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button, .proj-card, .skill-card').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <>
      <div className="cursor" ref={dot} />
      <div className="cursor-ring" ref={ring} />
    </>
  )
}