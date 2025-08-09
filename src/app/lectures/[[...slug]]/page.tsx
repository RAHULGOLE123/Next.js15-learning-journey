import React from 'react'

export default async function lactures ({params}:{params:Promise<{slug : string[]}>}) {
    const {slug} = await params;

    console.log(slug)

    if (slug?.length == 3){
        return(
            <div>
                Lectures 5
            </div>
        )
    }

    if (slug?.length == 4){
        return(
            <div>
                Lectures 4
            </div>
        )
    }
  return (
    <div>
      lectures
    </div>
  )
}
