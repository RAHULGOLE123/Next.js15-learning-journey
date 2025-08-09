
import { Metadata } from 'next'
import React from 'react'

type Porps = {params:Promise<{productId: string}>}


export async function generateMetadata({params}:Porps):Promise<Metadata> {
  const productId = (await params).productId

  return{
    title : `product ${productId}`,
    description : `product description`

  } 
  
}

export default async function productId({params}: Porps) {

    const productId = (await params).productId
  return (
    <div>
      product Details {productId}
    </div>

  )
}
