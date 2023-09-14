import { useDispatch } from 'react-redux'
import closeIcon from '../assets/close.png'
import { toggleModal } from '../features/user'

export default function ConfirmModal() {
  const dispatch = useDispatch()

  return (
    <div className="modal-blocker">
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
  )
}
