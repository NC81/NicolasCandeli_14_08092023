import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import './index.css'
import Error from './pages/error'
import CreateEmployee from './pages/create-employee'
import EmployeeList from './pages/employee-list'
import Layout from './components/layout'
import { Provider } from 'react-redux'
import { store } from './utils/store'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Navigate to="create-employee" replace />,
      },
      {
        path: 'create-employee',
        element: <CreateEmployee />,
      },
      {
        path: 'employees-list',
        element: <EmployeeList />,
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
