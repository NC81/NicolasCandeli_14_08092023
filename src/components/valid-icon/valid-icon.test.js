import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import { renderWithProviders } from '../../utils/test/index'
import ValidIcon from './valid-icon'

describe('Given one of the required input is empty', () => {
  it('should render a warning icon', async () => {
    renderWithProviders(<ValidIcon value="" />)

    const warningIcon = screen.getByTestId('warning-icon')
    expect(warningIcon).toBeInTheDocument()
  })
})

describe('Given one of the required input is not empty', () => {
  it('should render a checked icon', async () => {
    renderWithProviders(<ValidIcon value="Sales" />)

    const checkedIcon = screen.getByTestId('checked-icon')
    expect(checkedIcon).toBeInTheDocument()
  })
})
