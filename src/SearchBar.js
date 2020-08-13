import React, {useState, useEffect} from 'react'
import FilteredResults from './FilteredResults';

// description =>[{quote: "string", author: "string"}, {quote: "string", author: "string"}]
export default function SearchBar({descriptions}) {

    const [value, setValue] = useState();
    const [found, setFound] = useState([])

    let results;
    const searchValue = (event)=>{
       setValue(event.target.value)
         results = descriptions.filter((word)=> word.quote.toLowerCase().includes(event.target.value))
        
         setFound(results)
    
    }
    

    return (
      
        <div>

           <p>Search for a quote</p>
            <input type="text"  placeholder="Search for a quote" onChange={searchValue} />
          { <FilteredResults results={found}/>}  
        </div>
    )
}
