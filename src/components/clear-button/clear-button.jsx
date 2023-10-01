import { memo } from 'react'
import clear from '../../assets/clear.png'

export default memo(function ClearButton({ onClick, value }) {
  return (
    <>
      {value && (
        <button
          className="clear-button"
          data-testid="clear-button"
          onClick={onClick}
        >
          <img src={clear} alt="Clear" />
        </button>
      )}
    </>
  )
})
