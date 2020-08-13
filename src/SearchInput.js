import React, {useState, useEffect} from 'react'
import SearchBar from  "./SearchBar"
export default function SearchInput() {
    const [searchQuote, setSearchQuote] = useState([]);
    useEffect(()=>{
        fetch("http://altom-quote-server.glitch.me/quotes")
        .then(res => res.json())
        .then(data=>{
            setSearchQuote(data)
        })
    }, [])

    return (
        <div>   
              <SearchBar descriptions={searchQuote} />
          {/* <div>
         
                {searchQuote.map((quote, index)=>{
                    return(
                        <p syle={{padding: "20px"
                    }} key={index}>{quote.quote}</p>
                    )
                })}
        </div> */}
   </div>

    )
}
