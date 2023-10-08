import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import { renderWithProviders } from '../../utils/test/index'
import ValidIcon from './valid-icon'

describe('Given I expect to see correct validation icons in a required input', () => {
  describe('when the required input is empty', () => {
    it('should render a warning icon', async () => {
      renderWithProviders(<ValidIcon value="" />)

      const warningIcon = screen.getByTestId('warning-icon')
      expect(warningIcon).toBeInTheDocument()
    })
  })

  describe('when the required input is not empty', () => {
    it('should render a checked icon', async () => {
      renderWithProviders(<ValidIcon value="John" />)

      const checkedIcon = screen.getByTestId('checked-icon')
      expect(checkedIcon).toBeInTheDocument()
    })
  })
})
