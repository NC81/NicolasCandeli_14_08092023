export default function ValidationBox({ firstName, lastName }) {
  return (
    <>
      <p className={firstName.length >= 2 ? 'text-valid' : 'text-invalid'}>
        First name must be at least 2 characters
      </p>
      <p className={lastName.length >= 2 ? 'text-valid' : 'text-invalid'}>
        Last name must be at least 2 characters
      </p>
    </>
  )
}
