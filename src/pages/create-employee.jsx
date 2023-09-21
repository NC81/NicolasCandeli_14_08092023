import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createEmployee } from '../features/employees'
import { toggleModal } from '../features/user'
import { departments, countryStates } from '../data/select'
import { DatePicker } from 'antd'
import warning from '../assets/warning.png'
import checked from '../assets/checked.png'
import Dropdown from '../components/dropdown'
import ConfirmModal from '../components/confirm-modal'

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
    dispatch(toggleModal(true))
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

  const datePickerStyle = {
    width: '100%',
    borderRadius: 0,
    backgroundColor: '#f7f7f7',
    border: 'none',
    boxShadow: 'inset 1px 1px 5px rgba(161, 161, 161, 0.788)',
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
            <legend>IDENTITY</legend>
            <label className="label-required" htmlFor="first-name">
              First Name{' '}
              <span className="text-required">
                (required){' '}
                {firstName && (
                  <img className="valid-icon" src={checked} alt="Checked" />
                )}
              </span>
              {!firstName && (
                <img className="warning-icon" src={warning} alt="Warning" />
              )}
            </label>
            <input
              onChange={(e) => {
                setFirstName(e.target.value)
              }}
              value={firstName}
              type="text"
              className="classic-input"
              id="first-name"
              required
            />
            <label className="label-required" htmlFor="last-name">
              Last Name{' '}
              <span className="text-required">
                (required){' '}
                {lastName && (
                  <img className="valid-icon" src={checked} alt="Checked" />
                )}
              </span>
              {!lastName && (
                <img className="warning-icon" src={warning} alt="Warning" />
              )}
            </label>
            <input
              onChange={(e) => {
                setLastName(e.target.value)
              }}
              value={lastName}
              className="classic-input"
              type="text"
              id="last-name"
              required
            />
            <label>Date of Birth</label>
            <DatePicker
              placeholder="Select birth date"
              format="MM-DD-YYYY"
              style={datePickerStyle}
              onChange={(date, dateString) => {
                setBirthDate({ date: date, dateString: dateString })
              }}
              value={birthDate.date !== '' ? birthDate.date : null}
            />
          </fieldset>
          <fieldset>
            <legend>COMPANY</legend>
            <label className="label-required" htmlFor="department">
              Department{' '}
              <span className="text-required">
                (required){' '}
                {department && (
                  <img className="valid-icon" src={checked} alt="Checked" />
                )}
              </span>
              {!department && (
                <img className="warning-icon" src={warning} alt="Warning" />
              )}
            </label>
            <select
              onChange={(e) => {
                setDepartment(e.target.value)
              }}
              name="department"
              id="department"
              className="classic-input"
              value={department}
              required
            >
              <Dropdown list={departments} />
            </select>
            <label className="label-required">Start Date</label>
            <DatePicker
              placeholder="Select start date"
              format="MM-DD-YYYY"
              style={datePickerStyle}
              onChange={(date, dateString) => {
                setStartDate({ date: date, dateString: dateString })
              }}
              value={startDate.date !== '' ? startDate.date : null}
            />
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
          className="submit-button"
          disabled={firstName && lastName && department ? false : true}
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
