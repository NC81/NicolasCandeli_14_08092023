import { useSelector } from 'react-redux'
import { employees } from '../features/employees'
import { Table } from 'ocr-table-p14'

export default function EmployeesList() {
  const employeesSelector = useSelector(employees)
  const columns = [
    { key: 'firstName', header: 'First Name' },
    { key: 'lastName', header: 'Last Name' },
    { key: 'startDate', header: 'Start Date' },
    { key: 'department', header: 'Department' },
    { key: 'birthDate', header: 'Date of Birth' },
    { key: 'street', header: 'Street' },
    { key: 'city', header: 'City' },
    { key: 'state', header: 'State' },
    { key: 'zip', header: 'Zip Code' },
  ]

  return (
    <div className="page-wrapper">
      <Table data={employeesSelector} columns={columns} />
    </div>
  )
}
