import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
      <NavLink className="page-link page-link-creation" to="/create-employee">
        Create Employee
      </NavLink>
      <NavLink className="page-link page-link-list" to="/employees-list">
        Current Employees
      </NavLink>
    </nav>
  )
}
