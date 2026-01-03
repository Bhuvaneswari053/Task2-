import React from 'react'

export const Home = () => {
    const LogDatas=(a,b)=>{
        console.log("LogData component clicked");
        console.log(a);
        console.log(b);
    }
  return (
        <button onClick={()=>LogDatas("Hello","World")}>Click</button>
  )
}
export default Home
