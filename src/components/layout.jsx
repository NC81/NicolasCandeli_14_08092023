import { Outlet } from 'react-router-dom'
import Nav from './nav'

export default function Layout() {
  return (
    <main className="layout">
      <header>
        <h1>HRnet</h1>
        <Nav />
      </header>{' '}
      <Outlet />
    </main>
  )
}
