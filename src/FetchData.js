import React, {useState, useEffect} from 'react'

export default function FetchData() {
    const [quote, setQuote] = useState([])
    const [change, setChange] = useState(0)
    // function handleClick (){
    //     setChange(change + 1)
    // }
       useEffect(()=>{
           fetch("http://altom-quote-server.glitch.me/quotes/random")
           .then(res =>res.json())
           .then((data)=>{
                setQuote(data)
           })
       }, [change])


    return (
        <div>
         <h2>  {quote.quote}</h2>
          <h3>{quote.author}</h3>
          <button onClick={()=>setChange(change+1)}>Next quote</button>
        </div>
    )
}
