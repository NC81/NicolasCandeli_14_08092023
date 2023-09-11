import { useState } from 'react'
import closeIcon from '../assets/close.png'

export default function ConfirmModal() {
  const [open, setOpen] = useState(true)

  return (
    <>
      {' '}
      {open ? (
        <div className="modal-blocker">
          <div className="modal-content">
            Employee Created!
            <button
              onClick={() => {
                open && setOpen(false)
              }}
              className="close-button"
            >
              <img src={closeIcon} alt="" />
            </button>
          </div>
        </div>
      ) : null}
    </>
  )
}
