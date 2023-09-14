import { createSlice } from '@reduxjs/toolkit'

const { actions, reducer } = createSlice({
  name: 'user',
  initialState: { isModalOpen: false },
  reducers: {
    toggleModal: (draft, action) => {
      draft.isModalOpen = action.payload
    },
  },
})

export const isModalOpenSelector = (state) => state.user.isModalOpen
export const { toggleModal } = actions
export default reducer
