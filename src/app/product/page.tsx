//product page
import Link from 'next/link'
import React from 'react'

export default function products() {
  const productId = 4
  return (
    <div>
        <ul>
            <li><Link href='product/1'>product 1</Link></li>
            <li><Link href='product/2'>product 2</Link></li>
            <li><Link href='product/3' replace>product 3</Link></li>
            <li><Link href={`/product/${productId}`}>product {productId}</Link></li>
            
        </ul>
      
    </div>
  )
}
