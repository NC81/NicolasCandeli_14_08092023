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

      const startDateNode = screen.getByPlaceholderText(/select birth date/i)
      expect(startDateNode).toBeInTheDocument()

      act(() => {
        user.type(startDateNode, '05-05-2000')
      })
      await waitFor(() => expect(startDateNode).toHaveValue('05-05-2000'))
    })
  })

  describe('when I select a department in the dropdown menu', () => {
    it('should render the correct string in the corresponding input', async () => {
      const user = userEvent.setup()
      renderWithProviders(<CreateEmployee />)

      const firstOption = screen.getByTestId('option-Sales')
      expect(firstOption).toHaveTextContent('Sales')
      expect(firstOption).toHaveValue('Sales')

      const departmentInput = screen.getByTestId('department-input')
      act(() => {
        user.selectOptions(departmentInput, firstOption)
      })
      await waitFor(() => expect(firstOption.selected).toBe(true))
      await waitFor(() => expect(departmentInput).toHaveTextContent('Sales'))
    })
  })

  describe('when I select a state in the dropdown menu', () => {
    it('should render the correct string in the corresponding input', async () => {
      const user = userEvent.setup()
      renderWithProviders(<CreateEmployee />)

      const lastOption = screen.getByTestId('option-WY')
      expect(lastOption).toHaveTextContent('Wyoming')
      expect(lastOption).toHaveValue('WY')

      const stateInput = screen.getByTestId('state-input')
      act(() => {
        user.selectOptions(stateInput, lastOption)
      })
      await waitFor(() => expect(lastOption.selected).toBe(true))
      await waitFor(() => expect(stateInput).toHaveTextContent('Wyoming'))
    })
  })

  describe('when the form is correctly filled and I click on submit button', () => {
    it('should open the modal dialog', async () => {
      const user = userEvent.setup()
      renderWithProviders(<CreateEmployee />)

      const fistNameInput = screen.getByTestId('first-name-input')
      user.type(fistNameInput, 'John')
      await waitFor(() => expect(fistNameInput).toHaveValue('John'))

      const lastNameInput = screen.getByTestId('last-name-input')
      user.type(lastNameInput, 'Connor')
      await waitFor(() => expect(lastNameInput).toHaveValue('Connor'))

      const departmentInput = screen.getByTestId('department-input')
      const firstOption = screen.getByTestId('option-Sales')
      act(() => {
        user.selectOptions(departmentInput, firstOption)
      })
      await waitFor(() => expect(firstOption.selected).toBe(true))

      const submitButton = screen.getByTestId('submit-button')
      user.click(submitButton)
      const modal = await screen.findByTestId('modal-blocker')
      expect(modal).toBeInTheDocument()
    })
  })

  describe('when I click on the clear icon in a non empty field', () => {
    it('should clear the input value', async () => {
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
