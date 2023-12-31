import { Outlet, NavLink } from 'react-router-dom'

export default function Layout() {
  return (
    <main className="layout">
      <header>
        <h1>H R n e t</h1>
        <nav className="navbar">
          <NavLink
            className="page-link page-link-creation"
            to="/create-employee"
          >
            Create Employee
          </NavLink>
          <NavLink className="page-link page-link-list" to="/employees-list">
            Active Employees
          </NavLink>
        </nav>
      </header>{' '}
      <Outlet />
    </main>
  )
}
