import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import CreateEmployee from './pages/create-employee'
import EmployeeList from './pages/employee-list'

const router = createBrowserRouter([
  {
    path: '/',
    element: <CreateEmployee />,
  },
  {
    path: 'list',
    element: <EmployeeList />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
