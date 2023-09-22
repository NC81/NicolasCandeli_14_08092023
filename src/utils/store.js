import { configureStore } from '@reduxjs/toolkit'
import employees from '../features/employees'
import user from '../features/user'

export const store = configureStore({
  reducer: { employees, user },
})

// This method is used for testing the App with preloaded state
export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: { employees, user },
    preloadedState,
  })
}
