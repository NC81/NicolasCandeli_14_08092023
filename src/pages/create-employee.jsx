import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createEmployee } from '../features/employees'
import { toggleModal } from '../features/user'
import { departments, countryStates } from '../data/ui'
import Dropdown from '../components/dropdown'
import ConfirmModal from '../components/confirm-modal'
import ValidationBox from '../components/validation-box'
import { DatePicker } from 'antd'

export default function CreateEmployee() {
  const dispatch = useDispatch()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [department, setDepartment] = useState('')
  const [state, setState] = useState('')
  const [birthDate, setBirthDate] = useState({ date: '', dateString: '' })
  const [startDate, setStartDate] = useState({ date: '', dateString: '' })

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(
      createEmployee({
        firstName: firstName,
        lastName: lastName,
        street: street,
        city: city,
        zipCode: zipCode,
        department: department,
        state: state,
        birthDate: birthDate.dateString,
        startDate: startDate.dateString,
      })
    )
    dispatch(toggleModal(''))
    setFirstName('')
    setLastName('')
    setStreet('')
    setCity('')
    setZipCode('')
    setDepartment('')
    setState('')
    setBirthDate({ date: '', dateString: '' })
    setStartDate({ date: '', dateString: '' })
  }

  return (
    <>
      <div className="form-container">
        <form
          onSubmit={(e) => {
            handleSubmit(e)
          }}
          action="#"
          id="employee-form"
          className="employee-form"
        >
          <fieldset>
            <legend>RELATIVE</legend>
            <label htmlFor="first-name">
              First Name <span className="label-required">(required)</span>
            </label>
            <input
              onChange={(e) => {
                setFirstName(e.target.value)
              }}
              value={firstName}
              type="text"
              className="classic-input"
              id="first-name"
            />
            <label htmlFor="last-name">
              Last Name <span className="label-required">(required)</span>
            </label>
            <input
              onChange={(e) => {
                setLastName(e.target.value)
              }}
              value={lastName}
              className="classic-input"
              type="text"
              id="last-name"
            />
            <label>Date of Birth</label>

            <DatePicker
              placeholder="Select birth date"
              format="MM-DD-YYYY"
              onChange={(date, dateString) => {
                setBirthDate({ date: date, dateString: dateString })
              }}
              value={birthDate.date !== '' ? birthDate.date : null}
            />
            <ValidationBox
              type="identity"
              firstName={firstName}
              lastName={lastName}
            />
          </fieldset>
          <fieldset>
            <legend>COMPANY</legend>
            <label>
              Start Date <span className="label-required">(required)</span>
            </label>

            <DatePicker
              placeholder="Select start date"
              format="MM-DD-YYYY"
              onChange={(date, dateString) => {
                setStartDate({ date: date, dateString: dateString })
              }}
              value={startDate.date !== '' ? startDate.date : null}
            />
            <label htmlFor="department">
              Department <span className="label-required">(required)</span>
            </label>
            <select
              onChange={(e) => {
                setDepartment(e.target.value)
              }}
              name="department"
              id="department"
              className="classic-input"
              value={department}
            >
              <Dropdown list={departments} />
            </select>
            <ValidationBox type="company" startDate={startDate.dateString} />
          </fieldset>
          <fieldset>
            <legend>ADDRESS</legend>
            <label htmlFor="street">Street</label>
            <input
              onChange={(e) => {
                setStreet(e.target.value)
              }}
              value={street}
              className="classic-input"
              id="street"
              type="text"
            />
            <label htmlFor="city">City</label>
            <input
              onChange={(e) => {
                setCity(e.target.value)
              }}
              value={city}
              className="classic-input"
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
              className="classic-input"
              role="combobox"
            >
              <Dropdown list={countryStates} />
            </select>
            <label htmlFor="zip-code">Zip Code</label>
            <input
              onChange={(e) => {
                setZipCode(e.target.value)
              }}
              value={zipCode}
              className="classic-input"
              id="zip-code"
              type="number"
              minLength="5"
            />
          </fieldset>
        </form>

        <button
          disabled={
            firstName && lastName && startDate.dateString ? false : true
          }
          type="submit"
          form="employee-form"
        >
          Save
        </button>
      </div>
      <ConfirmModal />
    </>
  )
}
