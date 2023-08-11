import React from 'react'

function Key({number, rotate}) {
  return (
    <div className="key" style={{'--uniqueValue': rotate}}>
        <h3>{number}</h3>
    </div>
  )
}

export default Key