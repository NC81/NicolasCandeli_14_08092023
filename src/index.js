import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import CreateEmployee from './pages/create-employee'
import EmployeeList from './pages/employee-list'
import Layout from './components/layout'
import { Provider } from 'react-redux'
import { store } from './utils/store'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'employees-list',
        element: <EmployeeList />,
      },
      {
        path: 'create-employee',
        element: <CreateEmployee />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
)
