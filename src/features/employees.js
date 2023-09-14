import { createSlice } from '@reduxjs/toolkit'

const { actions, reducer } = createSlice({
  name: 'employees',
  initialState: [],
  reducers: {
    createEmployee: {
      prepare: (value) => ({
        payload: value,
      }),
      reducer: (draft, action) => {
        draft.push(action.payload)
      },
    },
  },
})

export const { createEmployee } = actions
export default reducer
