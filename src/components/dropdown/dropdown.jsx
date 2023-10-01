import { memo } from 'react'

export default memo(function Dropdown({ list }) {
  return (
    <>
      {list.map(({ name, value }, index) => (
        <option
          value={value}
          key={`${name}-${index}`}
          hidden={value === '' ? true : false}
          data-testid={`option-${value}`}
        >
          {name}
        </option>
      ))}
    </>
  )
})
