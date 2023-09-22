import '@testing-library/jest-dom'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from '../../utils/test/index'
import ConfirmModal from '../modal/confirm-modal'

describe('Given the modal dialog is open', () => {
  it('should render a confirmation message and a close button', async () => {
    renderWithProviders(<ConfirmModal />, {
      preloadedState: {
        user: { isModalOpen: true },
      },
    })

    const modal = screen.getByTestId('modal-blocker')
    expect(modal).toHaveTextContent('Employee Created!')

    const closeButton = screen.getByTestId('close-button')
    expect(closeButton).toBeInTheDocument()
  })

  describe('when I click on close button', () => {
    it('should close the modal dialog', async () => {
      const user = userEvent.setup()
      renderWithProviders(<ConfirmModal />, {
        preloadedState: {
          user: { isModalOpen: true },
        },
      })

      const modalBlocker = screen.getByTestId('modal-blocker')
      expect(modalBlocker).toHaveTextContent('Employee Created!')

      const closeButton = screen.getByTestId('close-button')
      user.click(closeButton)
      await waitFor(() =>
        expect(screen.queryByText('Employee Created!')).not.toBeInTheDocument()
      )
    })
  })

  describe('when I press escape key', () => {
    it('should close the modal dialog', async () => {
      renderWithProviders(<ConfirmModal />, {
        preloadedState: {
          user: { isModalOpen: true },
        },
      })

      const modalBlocker = screen.getByTestId('modal-blocker')
      expect(modalBlocker).toHaveTextContent('Employee Created!')

      userEvent.keyboard('{Escape}')
      await waitFor(() =>
        expect(screen.queryByText('Employee Created!')).not.toBeInTheDocument()
      )
    })
  })
})
