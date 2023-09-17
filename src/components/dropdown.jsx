export default function Dropdown({ list }) {
  return (
    <>
      {list.map(({ name, abbreviation }, index) => (
        <option value={abbreviation} key={`${name}-${index}`}>
          {name}
        </option>
      ))}
    </>
  )
}
