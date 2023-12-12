import React, {useState} from 'react'
import axios from 'axios';
import { useParams} from 'react-router-dom' 

const Link = () => {



const [longlink,setLongLink]=useState("");
const [shortlink,setShortLink]=useState("");
const [message , setMessage] = useState('');
const [kisalink , setKisalink] = useState(""); 



// default false 
const handlePostRequest=()=>{
  const data={
    longlink:longlink, 
    darvinlink:shortlink 
  }

  axios.post('https://zetacoder.rocks/darvinapi/darvinberfin/create', data) 
  .then(response=>{
    console.log(response.data);  
    setMessage(response.data.message) 
    setKisalink(shortlink)
    
  })
     
  .catch(error =>{
    console.log('post hatası',error);
  })


}
    return (
      <div>

<div class="ui container">

 <div>
    <h1 size='huge'>Link Kısaltma</h1>
  
  </div>


<div class="ui input">
  <input type="text" value={longlink} placeholder="http://" onChange={(e) => setLongLink(e.target.value)} />
</div>

<label>
  Bağlantıyı Özelleştir
</label>

<div class="ui input">
  <input type="text" value={shortlink} onChange={(e) => setShortLink(e.target.value)}/>
</div>


<button class="ui button" onClick={handlePostRequest}>
  Kısalt
</button>

 <p>{message}</p> 

 <p> {kisalink}
</p>
</div>

       


      </div>
    )
  
}
export default Link;