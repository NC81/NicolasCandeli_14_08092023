import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createEmployee } from '../features/employees'
import { toggleModal, isModalOpenSelector } from '../features/user'
import { departments, countryStates } from '../data/ui'
import Dropdown from '../components/dropdown'
import ConfirmModal from '../components/confirm-modal'
import AntDatepicker from '../components/date-picker'
import ValidationBox from '../components/validation-box'

export default function CreateEmployee() {
  const dispatch = useDispatch()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [department, setDepartment] = useState(departments[0])
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState(countryStates[0].abbreviation)
  const [zipCode, setZipCode] = useState('')
  const isModalOpen = useSelector(isModalOpenSelector)

  function handleSubmit(e) {
    e.preventDefault()
    const birthDateInput = document.querySelector('.birthDate input')
    const startDateInput = document.querySelector('.startDate input')
    dispatch(
      createEmployee({
        firstName: firstName,
        lastName: lastName,
        birthDate: birthDateInput.value,
        startDate: startDateInput.value,
        street: street,
        city: city,
        state: state,
        zipCode: zipCode,
        department: department,
      })
    )
    dispatch(toggleModal(true))
  }

  return (
    <>
      <main className="container">
        <header className="create-employee-header">
          <h1>HRnet</h1>
        </header>
        <Link to="/list">View Current Employees</Link>
        <div>
          <h2>Create Employee</h2>
          <form
            onSubmit={(e) => {
              handleSubmit(e)
            }}
            action="#"
            id="create-employee"
          >
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
            <AntDatepicker name="birthDate" />
            <label>Start Date</label>
            <AntDatepicker name="startDate" />
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
            <ValidationBox firstName={firstName} lastName={lastName} />
          </form>
          <button
            disabled={
              firstName.length >= 2 && lastName.length >= 2 ? false : true
            }
            type="submit"
            form="create-employee"
          >
            Save
          </button>
        </div>
      </main>
      {isModalOpen && <ConfirmModal />}
    </>
  )
}
