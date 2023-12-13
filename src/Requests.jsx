import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom' 
import axios from 'axios';

const Requests = () => {

  const {link}= useParams()

useEffect (()=>{
axios.get(`https://zetacoder.rocks/darvinapi/darvinberfin/${link}`)
.then(response=>{
  
  console.log(response.data);
  return response.data.longlink;
})
.then(url=>{

  if(url){
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'http://' + url;
    }
    window.location.replace(url);
    console.log("from if");
}else{
    console.log("from else");
}


})
.catch(error=>{
  console.log(error);
});


},[link])



  return (
    <div>

    </div> 
  )

  }
export default Requests;






