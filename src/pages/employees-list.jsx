import { useStore } from 'react-redux'

export default function EmployeesList() {
  const store = useStore()
  const stateData = store.getState().employees
  console.log('stateData', stateData)

  return (
    <div className="create-employee-wrapper">
      {/* Insert <Table /> component here */}
    </div>
  )
}
