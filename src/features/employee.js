import { createSlice } from '@reduxjs/toolkit'

const { actions, reducer } = createSlice({
  name: 'employee',
  initialState: {},
  reducers: {
    createEmployee: {
      prepare: ({
        firstName: _firstName,
        lastName: _lastName,
        department: _department,
        street: _street,
        city: _city,
        state: _state,
        zipCode: _zipCode,
      }) => ({
        payload: {
          _firstName,
          _lastName,
          _department,
          _street,
          _city,
          _state,
          _zipCode,
        },
      }),
      reducer: (draft, action) => {
        draft.firstName = action.payload._firstName
        draft.lastName = action.payload._lastName
        draft.department = action.payload._department
        draft.street = action.payload._street
        draft.city = action.payload._city
        draft.state = action.payload._state
        draft.zipCode = action.payload._zipCode
      },
    },
    addBirthDate: (draft, action) => {
      draft.birthDate = action.payload
    },
    addStartDate: (draft, action) => {
      draft.startDate = action.payload
    },
  },
})

export const { createEmployee, addBirthDate, addStartDate } = actions
export default reducer
