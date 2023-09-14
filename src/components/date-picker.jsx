import { DatePicker } from 'antd'

export default function AntDatepicker({ name }) {
  return (
    <>
      <DatePicker
        placeholder="Select date"
        format="MM-DD-YYYY"
        style={{ borderColor: 'black' }}
        className={name}
      />
    </>
  )
}
