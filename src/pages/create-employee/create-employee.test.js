import '@testing-library/jest-dom'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from '../../utils/test/index'
import CreateEmployee from './create-employee'

describe('Given I am a user on the create employee page', () => {
  describe('when I type a name in last name input', () => {
    it('should render the correct string in the input', async () => {
      const user = userEvent.setup()
      renderWithProviders(<CreateEmployee />)

      const lastNameInput = screen.getByTestId('last-name-input')
      user.type(lastNameInput, 'Marshall')
      await waitFor(() => expect(lastNameInput).toHaveValue('Marshall'))
    })
  })

  describe('when I set a date in start date input', () => {
    it('should render the correct string in the input', async () => {
      renderWithProviders(<CreateEmployee />)

      const startDateInput = screen.getByTestId('start-date')
      const dateString = '05-05-2000'

      userEvent.type(startDateInput, dateString)
      await waitFor(() => expect(startDateInput).toHaveValue(dateString))
    })
  })

  describe('when I select a state in the dropdown menu', () => {
    it('should render the corresponding string', async () => {
      const user = userEvent.setup()
      renderWithProviders(<CreateEmployee />)

      const stateLabel = screen.getByLabelText('State')
      user.click(stateLabel)

      userEvent.keyboard('{ArrowDown}')
      const option = await screen.findByText('Alabama')
      await screen.findByText('Delaware')

      user.click(option)
      await waitFor(() =>
        expect(screen.queryByText('Delaware')).not.toBeInTheDocument()
      )
      expect(screen.getByText('Alabama')).toBeInTheDocument()
    })
  })

  describe('when the form is correctly filled', () => {
    describe('and I click on submit button', () => {
      it('should open the modal dialog', async () => {
        const user = userEvent.setup()
        renderWithProviders(<CreateEmployee />)

        const firstNameInput = screen.getByTestId('first-name-input')
        user.type(firstNameInput, 'John')
        await waitFor(() => expect(firstNameInput).toHaveValue('John'))

        const submitButton = screen.getByTestId('submit-button')
        user.click(submitButton)
        const modal = await screen.findByTestId('modal-blocker')
        expect(modal).toBeInTheDocument()
        expect(modal).toHaveTextContent('Employee Created!')
      })
    })
  })
})
