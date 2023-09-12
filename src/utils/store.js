import { configureStore } from '@reduxjs/toolkit'
import employee from '../features/employee'

export const store = configureStore({
  reducer: employee,
})
