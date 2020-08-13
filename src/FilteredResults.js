import React from 'react'

export default function FilteredResults({results}) {

    return (
        <div>
            {results.map((p)=>{
                return(
                <h4>{p.quote}</h4>
                )
            })}
        </div>
    )
}
