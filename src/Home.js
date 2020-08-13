import React, {useState, useEffect} from 'react'

export default function Home() {
    const [photo, setPhoto] = useState([])

    useEffect(()=>{
        fetch("https://source.unsplash.com/random")
        .then(res=>{
           let url = res.url;
           console.log(url)
           setPhoto(url)
        }) 
      },[])
      const mystyle = {
          width: "60%",
      margin: "0 auto ",
        padding: "10px",
        
      };
    return (
        <div>
             <img src={photo} style={mystyle} />
        </div>
    )
}
