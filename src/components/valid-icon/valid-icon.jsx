import warning from '../../assets/warning.png'
import checked from '../../assets/checked.png'

export default function ValidIcon({ value }) {
  return (
    <>
      {value ? (
        <img
          className="checked-icon"
          data-testid="checked-icon"
          src={checked}
          alt="Checked"
        />
      ) : (
        <img
          className="warning-icon"
          data-testid="warning-icon"
          src={warning}
          alt="Warning"
        />
      )}
    </>
  )
}
