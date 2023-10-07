import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { capitalize } from '../../utils/format'
import { createEmployee } from '../../features/employees'
import { departments, countryStates } from '../../data/dropdown'
import { DatePicker, ConfigProvider } from 'antd'
import Select from 'react-select'
import ConfirmModal from '../../components/modal/confirm-modal'
import ClearButton from '../../components/clear-button/clear-button'
import ValidIcon from '../../components/valid-icon/valid-icon'

export default function CreateEmployee() {
  const dispatch = useDispatch()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [department, setDepartment] = useState({ label: '', value: '' })
  const [countryState, setCountryState] = useState({ label: '', value: '' })
  const [birthDate, setBirthDate] = useState({ date: '', dateString: '' })
  const [startDate, setStartDate] = useState({ date: '', dateString: '' })
  const [isModalOpened, setIsModalOpened] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(
      createEmployee({
        firstName: capitalize(firstName),
        lastName: capitalize(lastName),
        street: capitalize(street),
        city: capitalize(city),
        zipCode: zipCode,
        department: department.value,
        state: countryState.value,
        birthDate: birthDate.dateString,
        startDate: startDate.dateString,
      })
    )
    setFirstName('')
    setLastName('')
    setStreet('')
    setCity('')
    setZipCode('')
    setDepartment({ label: '', value: '' })
    setCountryState({ label: '', value: '' })
    setBirthDate({ date: '', dateString: '' })
    setStartDate({ date: '', dateString: '' })
    setIsModalOpened(true)
  }

  const datePickerStyle = {
    width: '100%',
    borderRadius: 0,
    backgroundColor: '#f7f7f7',
    border: 'none',
    boxShadow: 'inset 1px 1px 5px rgba(161, 161, 161, 0.788)',
    cellRangeBorderColor: 'red',
  }

  const selectStyle = {
    control: (base, { isFocused }) => {
      return {
        ...base,
        border: 'none',
        boxShadow: 'inset 1px 1px 4px rgba(161, 161, 161, 0.788)',
        borderRadius: 'none',
        minHeight: '30px',
        fontSize: '14px',
        backgroundColor: isFocused ? 'white' : '#f7f7f7',
      }
    },
    option: (base, { isFocused }) => {
      return {
        ...base,
        backgroundColor: isFocused ? '#1b7575' : 'white',
        color: isFocused ? 'white' : 'black',
        fontSize: '14px',
        height: '30px',
        minHeight: '30px',
        padding: '6px 0 0 11px',
      }
    },
    valueContainer: (provided) => ({
      ...provided,
      padding: '0 11px',
    }),
    singleValue: (provided) => ({
      ...provided,
      margin: '0',
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      height: '30px',
    }),
  }

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#1b7575',
          },
        }}
      >
        <div className="page-wrapper">
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
                    (required) <ValidIcon value={firstName} />
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
                <ClearButton
                  value={firstName}
                  onClick={() => setFirstName('')}
                />
              </div>
              <div className="input-group">
                <label htmlFor="last-name">Last Name</label>
                <input
                  onChange={(e) => {
                    setLastName(e.target.value)
                  }}
                  value={lastName}
                  className="classic-input"
                  type="text"
                  id="last-name"
                />
                <ClearButton value={lastName} onClick={() => setLastName('')} />
              </div>
              <div className="input-group">
                <label>Date of Birth</label>
                <DatePicker
                  placeholder="Select a birth date"
                  format="MM-DD-YYYY"
                  style={datePickerStyle}
                  allowClear={false}
                  showToday={false}
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
                <label htmlFor="react-select-3-input">Department</label>
                <Select
                  styles={selectStyle}
                  options={departments}
                  placeholder="Select a department"
                  onChange={(e) => {
                    setDepartment(e)
                  }}
                  value={department.value !== '' ? department : null}
                />
                <ClearButton
                  value={department}
                  onClick={() => setDepartment({ label: '', value: '' })}
                />
              </div>
              <div className="input-group">
                <label>Start Date</label>
                <DatePicker
                  placeholder="Select a start date"
                  format="MM-DD-YYYY"
                  style={datePickerStyle}
                  allowClear={false}
                  showToday={false}
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
                <label htmlFor="react-select-5-input">State</label>
                <Select
                  styles={selectStyle}
                  options={countryStates}
                  placeholder="Select a state"
                  maxMenuHeight={308}
                  onChange={(e) => {
                    setCountryState(e)
                  }}
                  value={countryState.value !== '' ? countryState : null}
                />
                <ClearButton
                  value={countryState}
                  onClick={() => setCountryState({ label: '', value: '' })}
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
                />
                <ClearButton value={zipCode} onClick={() => setZipCode('')} />
              </div>
            </fieldset>
          </form>
          <button
            className="submit-button"
            type="submit"
            form="employee-form"
            data-testid="submit-button"
          >
            Save
          </button>
        </div>
      </ConfigProvider>
      {isModalOpened && <ConfirmModal setIsModalOpened={setIsModalOpened} />}
    </>
  )
}
