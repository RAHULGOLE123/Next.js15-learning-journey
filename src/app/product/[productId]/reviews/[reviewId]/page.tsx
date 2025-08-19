import { promises } from 'dns'
import React from 'react'
import productId from '../../page'

export default async function page({params}:{params: Promise<{ productId:string, reviewId:string}>}) {
    const {productId,reviewId} = await params



    if(reviewId == '50'){
      throw new Error ('Review Id Error')
    }
    
  return (
    <div>
      product Id {productId} review Id {reviewId}
    </div>
  )
}
