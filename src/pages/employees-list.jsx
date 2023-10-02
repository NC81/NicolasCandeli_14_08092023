import { useSelector } from 'react-redux'
import { employees } from '../features/employees'

export default function EmployeesList() {
  const employeesSelector = useSelector(employees)
  console.log('employeesSelector', employeesSelector)

  return (
    <div className="page-wrapper">{/* Insert <Table /> component here */}</div>
  )
}
