import '@testing-library/jest-dom'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from '../../utils/test/index'
import { act } from 'react-dom/test-utils'
import CreateEmployee from '../../pages/create-employee/create-employee'

describe('Given the modal is open', () => {
  describe('when I click on close button', () => {
    it('should close the modal dialog', async () => {
      const user = userEvent.setup()
      renderWithProviders(<CreateEmployee />)

      const fistNameInput = screen.getByTestId('first-name-input')
      const lastNameInput = screen.getByTestId('last-name-input')
      const departmentInput = screen.getByTestId('department-input')
      const firstOption = screen.getByTestId('option-Sales')
      user.type(fistNameInput, 'John')
      user.type(lastNameInput, 'Connor')
      act(() => {
        user.selectOptions(departmentInput, firstOption)
      })
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
      const lastNameInput = screen.getByTestId('last-name-input')
      const departmentInput = screen.getByTestId('department-input')
      const firstOption = screen.getByTestId('option-Sales')
      user.type(fistNameInput, 'John')
      user.type(lastNameInput, 'Connor')
      act(() => {
        user.selectOptions(departmentInput, firstOption)
      })
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
