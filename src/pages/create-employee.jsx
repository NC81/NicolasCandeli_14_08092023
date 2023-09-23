import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createEmployee } from '../features/employees'
import { toggleModal } from '../features/user'
import { departments, countryStates } from '../data/select'
import { DatePicker } from 'antd'
import Dropdown from '../components/dropdown/dropdown'
import ConfirmModal from '../components/modal/confirm-modal'
import ClearButton from '../components/clear-button'
import LabelIcon from '../components/label-icon'

export default function CreateEmployee() {
  const dispatch = useDispatch()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [department, setDepartment] = useState('')
  const [countryState, setCountryState] = useState('')
  const [birthDate, setBirthDate] = useState({ date: '', dateString: '' })
  const [startDate, setStartDate] = useState({ date: '', dateString: '' })

  function capitalize(string) {
    const wordsArray = string.split(' ')
    const formattedWordsArray = wordsArray.map((el) => {
      return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase()
    })
    const formattedString = formattedWordsArray.join(' ')
    return formattedString
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(
      createEmployee({
        firstName: capitalize(firstName),
        lastName: capitalize(lastName),
        street: capitalize(street),
        city: capitalize(city),
        zipCode: zipCode,
        department: department,
        state: countryState,
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
    setCountryState('')
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
      <div data-testid="test" className="form-container">
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
            <div className="input-group">
              <label className="label-required" htmlFor="first-name">
                First Name{' '}
                <span className="text-required">
                  (required) <LabelIcon value={firstName} />
                </span>
              </label>
              <input
                onChange={(e) => {
                  setFirstName(e.target.value)
                }}
                value={firstName}
                type="text"
                className="classic-input"
                data-testid="first-name-input"
                id="first-name"
                required
              />
              <ClearButton value={firstName} onClick={() => setFirstName('')} />
            </div>
            <div className="input-group">
              <label className="label-required" htmlFor="last-name">
                Last Name{' '}
                <span className="text-required">
                  (required) <LabelIcon value={lastName} />
                </span>
              </label>
              <input
                onChange={(e) => {
                  setLastName(e.target.value)
                }}
                value={lastName}
                className="classic-input"
                data-testid="last-name-input"
                type="text"
                id="last-name"
                required
              />
              <ClearButton value={lastName} onClick={() => setLastName('')} />
            </div>
            <div className="input-group">
              <label>Date of Birth</label>
              <DatePicker
                placeholder="Select birth date"
                format="MM-DD-YYYY"
                style={datePickerStyle}
                allowClear={false}
                onChange={(date, dateString) => {
                  setBirthDate({ date: date, dateString: dateString })
                }}
                value={birthDate.date !== '' ? birthDate.date : null}
              />
              <ClearButton
                value={birthDate.dateString}
                onClick={() => setBirthDate({ date: '', dateString: '' })}
              />
            </div>
          </fieldset>
          <fieldset>
            <legend>COMPANY</legend>
            <div className="input-group">
              <label className="label-required" htmlFor="department">
                Department{' '}
                <span className="text-required">
                  (required) <LabelIcon value={department} />
                </span>
              </label>
              <select
                onChange={(e) => {
                  setDepartment(e.target.value)
                }}
                name="department"
                id="department"
                className="classic-input"
                data-testid="department-input"
                value={department}
                required
              >
                <Dropdown list={departments} />
              </select>
              <ClearButton
                value={department}
                onClick={() => setDepartment('')}
              />
            </div>
            <div className="input-group">
              <label className="label-required">Start Date</label>
              <DatePicker
                placeholder="Select start date"
                format="MM-DD-YYYY"
                style={datePickerStyle}
                allowClear={false}
                onChange={(date, dateString) => {
                  setStartDate({ date: date, dateString: dateString })
                }}
                value={startDate.date !== '' ? startDate.date : null}
              />
              <ClearButton
                value={startDate.dateString}
                onClick={() => setStartDate({ date: '', dateString: '' })}
              />
            </div>
          </fieldset>
          <fieldset>
            <legend>ADDRESS</legend>
            <div className="input-group">
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
              <ClearButton value={street} onClick={() => setStreet('')} />
            </div>
            <div className="input-group">
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
              <ClearButton value={city} onClick={() => setCity('')} />
            </div>
            <div className="input-group">
              <label htmlFor="state">State</label>
              <select
                onChange={(e) => {
                  setCountryState(e.target.value)
                }}
                value={countryState}
                name="state"
                id="state"
                className="classic-input"
                data-testid="state-input"
              >
                <Dropdown list={countryStates} />
              </select>
              <ClearButton
                value={countryState}
                onClick={() => setCountryState('')}
              />
            </div>
            <div className="input-group">
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
              <ClearButton value={zipCode} onClick={() => setZipCode('')} />
            </div>
          </fieldset>
        </form>
        <button
          className="submit-button"
          disabled={firstName && lastName && department ? false : true}
          type="submit"
          form="employee-form"
          data-testid="submit-button"
        >
          Save
        </button>
      </div>
      <ConfirmModal />
    </>
  )
}
