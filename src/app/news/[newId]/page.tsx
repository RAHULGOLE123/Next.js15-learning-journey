'use client'
import {use} from 'react'

export default function news({params, searchParams} : {params : Promise<{ newId: string}>,
    searchParams : Promise<{cat: string,type: string}>}) {

    const {newId} = use (params)
    const {cat, type} = use (searchParams)
  return (
    <div>
      <h2> News {newId} {cat} {type} </h2>
    </div>
  )
}
