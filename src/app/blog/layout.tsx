import React from 'react'

export default function layout({children}:{children : React.ReactNode}) {
  return (
    <div>

        <div>
            Blog Header
        </div>

      {children}
    </div>
  )
}
