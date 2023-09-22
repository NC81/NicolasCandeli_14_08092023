import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef } from 'react'
import { toggleModal, isModalOpenSelector } from '../../features/user'
import closeIcon from '../../assets/close.png'

export default function ConfirmModal() {
  const dispatch = useDispatch()
  const contentRef = useRef(null)
  const buttonRef = useRef(null)
  const isModalOpen = useSelector(isModalOpenSelector)

  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') {
        dispatch(toggleModal(false))
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [dispatch])

  function handleClick(e) {
    if (
      buttonRef.current.contains(e.target) ||
      !contentRef.current.contains(e.target)
    ) {
      dispatch(toggleModal(false))
    }
  }

  return (
    <>
      {isModalOpen && (
        <div
          onClick={(e) => {
            handleClick(e)
          }}
          className="modal-blocker"
          data-testid="modal-blocker"
        >
          <div ref={contentRef} className="modal-content">
            Employee Created!
            <button
              ref={buttonRef}
              className="close-button"
              data-testid="close-button"
            >
              <img src={closeIcon} alt="Close" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
