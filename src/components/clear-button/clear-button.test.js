import '@testing-library/jest-dom'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from '../../utils/test/index'
import { act } from 'react-dom/test-utils'
import CreateEmployee from '../../pages/create-employee/create-employee'

describe('Given I am a user on the create employee page', () => {
  describe('when I click on the clear icon in a non empty field', () => {
    it('should clear input value', async () => {
      const user = userEvent.setup()
      renderWithProviders(<CreateEmployee />)

      const firstNameInput = screen.getByTestId('first-name-input')
      expect(firstNameInput).toBeInTheDocument()

      act(() => {
        user.type(firstNameInput, 'John')
      })
      await waitFor(() => expect(firstNameInput).toHaveValue('John'))
      expect(firstNameInput).toHaveFocus()

      const clearButton = screen.getByTestId('clear-button')
      user.click(clearButton)
      await waitFor(() => expect(firstNameInput).toHaveValue(''))
    })
  })
})
