import React from 'react'
import './Title.css'

const Title = ({title,des}) => {
  return (
    <div className="titleContainer">
        <h3>{title}</h3>
        <h1>{des}</h1>
    </div>
  )
}

export default Title