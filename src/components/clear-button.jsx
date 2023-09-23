import clear from '../assets/clear.png'

export default function ClearButton({ onClick, value }) {
  return (
    <>
      {value && (
        <button className="clear-button" onClick={onClick}>
          <img src={clear} alt="Clear" />
        </button>
      )}
    </>
  )
}
