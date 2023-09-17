export default function ValidationBox({
  type,
  firstName,
  lastName,
  startDate,
}) {
  return (
    <>
      {type === 'identity' ? (
        <>
          <p className={firstName ? 'text-valid' : 'text-invalid'}>
            A first name must added
          </p>
          <p className={lastName ? 'text-valid' : 'text-invalid'}>
            A last name must added
          </p>
        </>
      ) : (
        <p className={startDate ? 'text-valid' : 'text-invalid'}>
          A start date must be selected
        </p>
      )}
    </>
  )
}
