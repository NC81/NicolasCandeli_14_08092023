import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { toggleModal, isModalOpenSelector } from '../features/user'
import closeIcon from '../assets/close.png'

export default function ConfirmModal() {
  const dispatch = useDispatch()
  const isModalOpen = useSelector(isModalOpenSelector)

  useEffect(() => {
    function handleEscapeKey(e) {
      if (e.key === 'Escape') {
        dispatch(toggleModal(false))
      }
    }
    document.addEventListener('keydown', handleEscapeKey)
    return () => document.removeEventListener('keydown', handleEscapeKey)
  }, [dispatch])

  return (
    <>
      {isModalOpen && (
        <div
          onKeyDown={(e) => {
            e.key === 'Enter' && dispatch(toggleModal(false))
          }}
          className="modal-blocker"
        >
          <div className="modal-content">
            Employee Created!
            <button
              onClick={() => {
                dispatch(toggleModal(false))
              }}
              className="close-button"
            >
              <img src={closeIcon} alt="" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
