import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import CreateEmployee from './pages/create-employee'
import EmployeeList from './pages/employee-list'
import { Provider } from 'react-redux'
import { store } from './utils/store'

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
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
)
