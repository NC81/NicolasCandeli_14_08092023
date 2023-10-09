import { useEffect, useRef } from 'react'

export default function ConfirmModal({ setIsModalOpened }) {
  const contentRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') {
        setIsModalOpened(false)
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [setIsModalOpened])

  function handleClick(e) {
    if (
      buttonRef.current.contains(e.target) ||
      !contentRef.current.contains(e.target)
    ) {
      setIsModalOpened(false)
    }
  }

  return (
    <div
      onClick={(e) => {
        handleClick(e)
      }}
      className="modal-blocker"
      data-testid="modal-blocker"
      aria-describedby="modal-description"
      role="dialog"
    >
      <div ref={contentRef} className="modal-content" id="modal-description">
        Employee Created!
        <button
          ref={buttonRef}
          className="close-button"
          data-testid="close-button"
        >
          X
        </button>
      </div>
    </div>
  )
}
