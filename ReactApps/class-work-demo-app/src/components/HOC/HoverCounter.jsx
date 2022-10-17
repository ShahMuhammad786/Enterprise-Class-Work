import React from 'react'
import { useState } from 'react'
import withCounter from './withCounter'

class HoverCounter extends React.Component {
   
  render(){
    const { count, increament, color,align } = this.props 
    return (
        <div style={{
            backgroundColor: 'yellow', 
            width: '100%', 
            padding: '20px',
            textAlign:`${align}`
        }}>
            <h3 onMouseEnter={increament} style={{
                backgroundColor:`${color}`
            }}> 
                Hovered {count} times
            </h3>
        </div>
    )
  }
}

export default withCounter(HoverCounter)