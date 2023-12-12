import React, { useEffect, useState } from 'react'
import { useParams ,Navigate, useNavigate} from 'react-router-dom' 
import axios from 'axios';

const Requests = () => {
  const navigate = useNavigate();

  const {link}= useParams()
const [pagebsc,setPage]= useState("");

useEffect (()=>{
axios.get(`https://zetacoder.rocks/darvinapi/darvinberfin/${link}`)
.then(response=>{
  
  setPage(response.data.longlink);
  console.log(response.data);
})
.catch(error=>{
  console.log(error);
});


},[link])

useEffect(() => {
  if (link && pagebsc) {
    const url = new URL(pagebsc);
    navigate(url, { replace: true, target: "_blank" });
  }
}, [link,pagebsc]);


  return (
    <div>
     <a href={pagebsc}>{pagebsc}</a>

    </div> 
  )

  }
export default Requests;