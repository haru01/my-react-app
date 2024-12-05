import React, { useState } from 'react'

export const FetchTake2 = ({url}) => {
  return (<div></div>);
}


// カンペ
// export const FetchTake2 = ({url}) => {
//   const  [greeting, setGreeting] = useState('こんにちは')

//   const fetchGreeting = async () => {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log("ssss")
//     console.log(data)
//     // setGreeting(data.greeting)
//     TODO 例外
//   }
//   return (<div>
//     {greeting && <h1 role="heading">{greeting}</h1>}
//     TODO 例外
//     <button onClick={fetchGreeting}>あいさつする</button>
//   </div>);
// }