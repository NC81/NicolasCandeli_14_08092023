import { configureStore } from '@reduxjs/toolkit'
import employee from '../features/employee'
import user from '../features/user'

export const store = configureStore({
  reducer: { employee, user },
})
