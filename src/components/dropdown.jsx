import { departments, countryStates } from '../data/ui'

export default function Dropdown({ type }) {
  return (
    <>
      {type === 'countryStates'
        ? countryStates.map(({ name, abbreviation }, index) => (
            <option value={abbreviation} key={`${name}-${index}`}>
              {name}
            </option>
          ))
        : departments.map((department, index) => (
            <option key={`${department}-${index}`}>{department}</option>
          ))}
    </>
  )
}