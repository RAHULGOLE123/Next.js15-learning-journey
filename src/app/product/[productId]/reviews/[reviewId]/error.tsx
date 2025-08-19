
'use client'
export default function ReviewError({error}:{error: Error}) {
  return (
    <div>
      <h1>Error:{error.message}</h1>
    </div>
  )
}
