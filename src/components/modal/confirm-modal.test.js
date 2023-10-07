import '@testing-library/jest-dom'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from '../../utils/test/index'
import CreateEmployee from '../../pages/create-employee/create-employee'

describe('Given the modal is open', () => {
  describe('when I click on close button', () => {
    it('should close the modal dialog', async () => {
      const user = userEvent.setup()
      renderWithProviders(<CreateEmployee />)

      const fistNameInput = screen.getByTestId('first-name-input')
      user.type(fistNameInput, 'John')

      const submitButton = screen.getByTestId('submit-button')
      user.click(submitButton)
      await screen.findByTestId('modal-blocker')

      const closeButton = screen.getByTestId('close-button')
      user.click(closeButton)
      await waitFor(() =>
        expect(screen.queryByText('Employee Created!')).not.toBeInTheDocument()
      )
    })
  })
  describe('when I press escape key', () => {
    it('should close the modal dialog', async () => {
      const user = userEvent.setup()
      renderWithProviders(<CreateEmployee />)

      const fistNameInput = screen.getByTestId('first-name-input')
      user.type(fistNameInput, 'John')

      const submitButton = screen.getByTestId('submit-button')
      user.click(submitButton)
      await screen.findByTestId('modal-blocker')

      userEvent.keyboard('{Escape}')
      await waitFor(() =>
        expect(screen.queryByText('Employee Created!')).not.toBeInTheDocument()
      )
    })
  })
})
