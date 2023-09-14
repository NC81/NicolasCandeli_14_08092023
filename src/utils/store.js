import { configureStore } from '@reduxjs/toolkit'
import employees from '../features/employees'
import user from '../features/user'

export const store = configureStore({
  reducer: { employees, user },
})
