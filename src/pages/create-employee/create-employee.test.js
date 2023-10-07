import '@testing-library/jest-dom'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from '../../utils/test/index'
import { act } from 'react-dom/test-utils'
import CreateEmployee from './create-employee'

describe('Given I am a user on the create employee page', () => {
  describe('when I select a date', () => {
    it('should render the correct string in the corresponding input', async () => {
      const user = userEvent.setup()
      renderWithProviders(<CreateEmployee />)

      const startDateNode = screen.getByPlaceholderText(/select a birth date/i)
      expect(startDateNode).toBeInTheDocument()

      act(() => {
        user.type(startDateNode, '05-05-2000')
      })

      await waitFor(() => expect(startDateNode).toHaveValue('05-05-2000'))
    })
  })

  describe('when I select a state in the dropdown menu', () => {
    it('should render the corresponding string', async () => {
      const user = userEvent.setup()
      renderWithProviders(<CreateEmployee />)

      const select = screen.getByLabelText('State')
      user.click(select)

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

        const fistNameInput = screen.getByTestId('first-name-input')
        user.type(fistNameInput, 'John')
        await waitFor(() => expect(fistNameInput).toHaveValue('John'))

        const submitButton = screen.getByTestId('submit-button')
        user.click(submitButton)
        const modal = await screen.findByTestId('modal-blocker')
        expect(modal).toBeInTheDocument()
        expect(modal).toHaveTextContent('Employee Created!')
      })
    })
  })
})
