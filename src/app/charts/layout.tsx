import React from 'react'

export default function layout({lineChart, barChart, heatmap, login}: {
    lineChart : React.ReactNode,
    barChart : React.ReactNode,
    heatmap : React.ReactNode,
    login : React.ReactNode

}) {

    const isUserLogin = false
  return (
    <div>
        {isUserLogin ?<>
       <div>    
        {lineChart}
       </div>
       <div>
        {barChart}
       </div>
       <div>
        {heatmap}
       </div>
       </> : <div>{login}</div>}
    </div>
  )
}
