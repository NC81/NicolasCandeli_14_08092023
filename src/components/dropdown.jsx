export default function Dropdown({ list }) {
  return (
    <>
      {list.map(({ name, value }, index) => (
        <option
          value={value}
          key={`${name}-${index}`}
          hidden={value === '' ? true : false}
        >
          {name}
        </option>
      ))}
    </>
  )
}
