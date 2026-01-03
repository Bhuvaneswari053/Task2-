import React from 'react'

const LogData = () => {
   const handleClick=()=>{
    console.log("LogData component clicked");
   }
  return (
      <button onClick={handleClick}>Log Data</button>
  )
}
export default LogData
