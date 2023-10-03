import { useSelector } from 'react-redux'
import { employees } from '../features/employees'
import { Table } from 'ocr-table-p14'

export default function EmployeesList() {
  const employeesSelector = useSelector(employees)

  return (
    <div className="page-wrapper">
      <Table data={employeesSelector} />
    </div>
  )
}
