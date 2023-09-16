import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createEmployee } from '../features/employees'
import { toggleModal } from '../features/user'
import { departments, countryStates } from '../data/ui'
import Dropdown from '../components/dropdown'
// import ConfirmModal from '../components/confirm-modal'
import ValidationBox from '../components/validation-box'
import { DatePicker } from 'antd'

export default function CreateEmployee() {
  const dispatch = useDispatch()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [birthDate, setBirthDate] = useState({ date: '', dateString: '' })
  const [startDate, setStartDate] = useState({ date: '', dateString: '' })
  const [department, setDepartment] = useState(departments[0])
  const [state, setState] = useState(countryStates[0].abbreviation)

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(
      createEmployee({
        firstName: firstName,
        lastName: lastName,
        birthDate: birthDate.dateString,
        startDate: startDate.dateString,
        street: street,
        city: city,
        state: state,
        zipCode: zipCode,
        department: department,
      })
    )
    dispatch(toggleModal(true))
    setFirstName('')
    setLastName('')
    setStreet('')
    setCity('')
    setZipCode('')
    setBirthDate({ date: '', dateString: '' })
    setStartDate({ date: '', dateString: '' })
    setDepartment(departments[0])
    setState(countryStates[0].abbreviation)
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
              value={firstName}
              type="text"
              id="first-name"
            />
            <label htmlFor="last-name">Last Name</label>
            <input
              onChange={(e) => {
                setLastName(e.target.value)
              }}
              value={lastName}
              type="text"
              id="last-name"
            />
            <label>Date of Birth</label>
            <DatePicker
              placeholder="Select date"
              format="MM-DD-YYYY"
              style={{ borderColor: 'black' }}
              onChange={(date, dateString) => {
                setBirthDate({ date: date, dateString: dateString })
              }}
              value={birthDate.date !== '' ? birthDate.date : null}
            />
            <label>Start Date</label>
            <DatePicker
              placeholder="Select date"
              format="MM-DD-YYYY"
              style={{ borderColor: 'black' }}
              onChange={(date, dateString) => {
                setStartDate({ date: date, dateString: dateString })
              }}
              value={startDate.date !== '' ? startDate.date : null}
            />{' '}
            <fieldset className="address">
              <legend>Address</legend>
              <label htmlFor="street">Street</label>
              <input
                onChange={(e) => {
                  setStreet(e.target.value)
                }}
                value={street}
                id="street"
                type="text"
              />
              <label htmlFor="city">City</label>
              <input
                onChange={(e) => {
                  setCity(e.target.value)
                }}
                value={city}
                id="city"
                type="text"
              />
              <label htmlFor="state">State</label>
              <select
                onChange={(e) => {
                  setState(e.target.value)
                }}
                value={state}
                name="state"
                id="state"
                role="combobox"
              >
                <Dropdown type="countryStates" />
              </select>
              <label htmlFor="zip-code">Zip Code</label>
              <input
                onChange={(e) => {
                  setZipCode(e.target.value)
                }}
                value={zipCode}
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
              value={department}
            >
              <Dropdown type="departments" />
            </select>
            <ValidationBox firstName={firstName} lastName={lastName} />
          </form>
          <button
            disabled={firstName && lastName ? false : true}
            type="submit"
            form="create-employee"
          >
            Save
          </button>
        </div>
      </main>
      {/* <ConfirmModal /> */}
    </>
  )
}
