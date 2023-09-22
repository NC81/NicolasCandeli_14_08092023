import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import { renderWithProviders } from '../../utils/test/index'
import { departments, countryStates } from '../../data/select'
import Dropdown from '../dropdown/dropdown'

describe('Given the department dropdown menu is open', () => {
  it('should render all option elements in expected order with correct values', () => {
    renderWithProviders(<Dropdown list={departments} />)

    const departmentOptions = screen.getAllByRole('option')
    expect(departmentOptions.length).toBe(departments.length - 1)

    const arrayFromDOM = departmentOptions.map((el) => {
      return { name: el.value, value: el.value }
    })

    departments.shift()
    expect(arrayFromDOM).toEqual(departments)
  })
})

describe('Given the country states dropdown menu is open', () => {
  it('should render all option elements in expected order with correct values', () => {
    renderWithProviders(<Dropdown list={countryStates} />)

    const departmentOptions = screen.getAllByRole('option')
    expect(departmentOptions.length).toBe(countryStates.length - 1)

    const arrayFromDOM = departmentOptions.map((el) => {
      return { name: el.textContent, value: el.value }
    })

    countryStates.shift()
    expect(arrayFromDOM).toEqual(countryStates)
  })
})
