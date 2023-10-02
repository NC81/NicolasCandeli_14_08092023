import { createSlice } from '@reduxjs/toolkit'

const { actions, reducer } = createSlice({
  name: 'employees',
  initialState: [],
  reducers: {
    createEmployee: (draft, action) => {
      draft.push(action.payload)
    },
  },
})

export const employees = (state) => state.employees
export const { createEmployee } = actions
export default reducer
