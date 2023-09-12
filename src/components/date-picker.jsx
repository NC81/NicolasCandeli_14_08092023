import { DatePicker } from 'antd'
import { useDispatch } from 'react-redux'
import { addBirthDate, addStartDate } from '../features/employee'

export default function AntDatepicker({ type, className }) {
  const dispatch = useDispatch()

  return (
    <>
      <DatePicker
        placeholder="select date"
        format="MM-DD-YYYY"
        showToday={false}
        style={{ borderColor: 'black' }}
        className={className}
        onChange={(e) => {
          const date = new Date(e).toLocaleDateString('en-US')
          type === 'birthDate'
            ? dispatch(addBirthDate(date))
            : dispatch(addStartDate(date))
        }}
      />
    </>
  )
}
