import React from 'react'
import { Input } from 'antd'; 
import { useState } from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less' // to be imported for using ant design.

const { TextArea } = Input;

import ClickCounter from './HOC/ClickCounter';
import HoverCounter from './HOC/HoverCounter';

const SecondClassWork = () => {
  const [count, setCount] = useState(0)
  
  return (
    <>
      {/* <h3>Click me!</h3> */}
      {/* <TextArea 
        onChange={(e) => {
          let len = e.target.value.length
          if(len==0)
            setCount(0)
          else
            setCount(len)
        }}
        rows={4} placeholder="type here " />
      <p>You Types {count} characters.</p> */}

      <ClickCounter />
      <br/>
      <HoverCounter />

    </>
  )
}

export default SecondClassWork