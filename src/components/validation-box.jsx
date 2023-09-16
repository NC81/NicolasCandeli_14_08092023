export default function ValidationBox({ firstName, lastName }) {
  return (
    <>
      <p className={firstName ? 'text-valid' : 'text-invalid'}>
        First name must be at least 1 character
      </p>
      <p className={lastName ? 'text-valid' : 'text-invalid'}>
        Last name must be at least 1 character
      </p>
    </>
  )
}
