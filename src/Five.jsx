import React from 'react';

import { useState } from "react";
const Five = () => {
    const [num, setNum] = useState(0);
    const [word, setWord] = useState('welcome to to');
    const [name, setName] = useState('sultan')
    return (
        <div>
            <h1>{num}</h1>
      <button onClick={() => {
        setNum(num + 5)
        if(num < 15) setNum(num + 5)
      }
      }>+5</button>
      <button onClick={() => {
        setNum(num - 5)
        if(num > 0) setNum(num - 5) 
      }
         
      }>-5</button>


      <button onClick={() => {
        setName('nuradil')
      }}>change name</button>
     <button onClick={() => { setNum(0)}}>reset</button>

   
    </div>
        
    );
}

export default Five;
