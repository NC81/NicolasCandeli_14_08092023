import { Link } from 'react-router-dom'
import Dropdown from '../components/dropdown'
import ConfirmModal from '../components/confirm-modal'

export default function CreateEmployee() {
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
            <input type="text" id="first-name" />
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" />
            <label htmlFor="birth-date">Date of Birth</label>
            <input type="date" id="birth-date" />
            <label htmlFor="start-date">Start Date</label>
            <input type="date" id="start-date" />
            <fieldset className="address">
              <legend>Address</legend>
              <label htmlFor="street">Street</label>
              <input id="street" type="text" />
              <label htmlFor="city">City</label>
              <input id="city" type="text" />
              <label htmlFor="state">State</label>
              <select name="state" id="state">
                <Dropdown type="countryStates" />
              </select>
              <label htmlFor="zip-code">Zip Code</label>
              <input id="zip-code" type="number" minLength="5" />
            </fieldset>
            <label htmlFor="department">Department</label>
            <select name="department" id="department">
              <Dropdown type="departments" />
            </select>
          </form>
        </div>
      </main>
      {/* <ConfirmModal /> */}
    </>
  )
}
