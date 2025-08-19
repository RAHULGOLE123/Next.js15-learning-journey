
import { Metadata } from 'next'
import { resolve } from 'path'
import React from 'react'

// type Porps = {params:Promise<{productId: string}>}


// export async function generateMetadata({params}:Porps):Promise<Metadata> {
//   const productId = (await params).productId

//   return{
//     title : `product ${productId}`,
//     description : `product description`

//   } 
  
// }

export default async function productId({params}:{params:Promise<{productId: string}>}) {

  await new Promise ((resolve) => {
    setTimeout(() => {
      resolve('resolved')
    }, 3000)
  })

    // const productId = (await params).productId
  return (
    <div>
      product Details 
    </div>

  )
}
