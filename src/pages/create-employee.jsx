import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createEmployee } from '../features/employee'
import Dropdown from '../components/dropdown'
// import ConfirmModal from '../components/confirm-modal'
import AntDatepicker from '../components/date-picker'

export default function CreateEmployee() {
  const dispatch = useDispatch()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [department, setDepartment] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zipCode, setZipCode] = useState('')

  return (
    <>
      <main className="container">
        <header className="create-employee-header">
          <h1>HRnet</h1>
        </header>
        <Link to="/list">View Current Employees</Link>
        <div>
          <h2>Create Employee</h2>
          <form action="#" id="create-employee">
            <label htmlFor="first-name">First Name</label>
            <input
              onChange={(e) => {
                setFirstName(e.target.value)
              }}
              type="text"
              id="first-name"
            />
            <label htmlFor="last-name">Last Name</label>
            <input
              onChange={(e) => {
                setLastName(e.target.value)
              }}
              type="text"
              id="last-name"
            />
            <label>Date of Birth</label>
            <AntDatepicker type="birthDate" className={'birth-date'} />
            <label>Start Date</label>
            <AntDatepicker type="startDate" className={'start-date'} />
            <fieldset className="address">
              <legend>Address</legend>
              <label htmlFor="street">Street</label>
              <input
                onChange={(e) => {
                  setStreet(e.target.value)
                }}
                id="street"
                type="text"
              />
              <label htmlFor="city">City</label>
              <input
                onChange={(e) => {
                  setCity(e.target.value)
                }}
                id="city"
                type="text"
              />
              <label htmlFor="state">State</label>
              <select
                onChange={(e) => {
                  setState(e.target.value)
                }}
                name="state"
                id="state"
              >
                <Dropdown type="countryStates" />
              </select>
              <label htmlFor="zip-code">Zip Code</label>
              <input
                onChange={(e) => {
                  setZipCode(e.target.value)
                }}
                id="zip-code"
                type="number"
                minLength="5"
              />
            </fieldset>
            <label htmlFor="department">Department</label>
            <select
              onChange={(e) => {
                setDepartment(e.target.value)
              }}
              name="department"
              id="department"
            >
              <Dropdown type="departments" />
            </select>
          </form>
          <button
            onClick={(e) => {
              e.preventDefault()
              dispatch(
                createEmployee({
                  firstName: firstName,
                  lastName: lastName,
                  department: department,
                  street: street,
                  city: city,
                  state: state,
                  zipCode: zipCode,
                })
              )
            }}
            type="submit"
          >
            Save
          </button>
        </div>
      </main>
      {/* <ConfirmModal /> */}
    </>
  )
}
