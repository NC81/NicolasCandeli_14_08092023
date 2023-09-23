import warning from '../assets/warning.png'
import checked from '../assets/checked.png'

export default function LabelIcon({ value }) {
  return (
    <>
      {value ? (
        <img className="checked-icon" src={checked} alt="Checked" />
      ) : (
        <img className="warning-icon" src={warning} alt="Warning" />
      )}
    </>
  )
}
