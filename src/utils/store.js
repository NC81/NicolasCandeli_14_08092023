import { configureStore } from '@reduxjs/toolkit'
import employees from '../features/employees'

export const store = configureStore({
  reducer: { employees },
})

// Used for testing the App with preloaded state
export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: { employees },
    preloadedState,
  })
}
