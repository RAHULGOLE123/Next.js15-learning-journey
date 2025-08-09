import { Metadata } from 'next'
import React from 'react'
import { deflate } from 'zlib'

//contact page
export const metadata: Metadata = {
  title:{
    absolute:'contact Next.js'
  }
}

export default function page() {
  return (
    <div>
      contact page
    </div>
  )
}
