import { DatePicker } from 'antd'

export default function AntDatepicker({ className }) {
  return (
    <>
      <DatePicker
        placeholder="select date"
        format="MM-DD-YYYY"
        showToday={false}
        style={{ borderColor: 'black' }}
        className={className}
      />
    </>
  )
}
