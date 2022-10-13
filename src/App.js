import React,{useState,useEffect,} from 'react'
import './App.css';

function App() {

  const [endPoint,setEndpoints] = useState('');

  const [container,setcontainer] = useState([]);

  const [finalpoint,setfinalpoint] = useState('');

 

  
  

  
    

  const fetchMe = () => {
    
   
   fetch(`https://moviesdatabase.p.rapidapi.com/titles/search/title/+${endPoint}?info=mini_info&limit=10&page=1&titleType=movie`, {
   "method" : 'GET',
   "headers": {
   'X-RapidAPI-Key': 'fdb83b7f59mshe8d37b35f501940p15a3f4jsn55784a2ba392',
   'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
   }
  })
  .then(response => { 
    
   return response.json();
  
  })
  .then(data=>{
    //setcontainer(data.results);
    console.log(data);
    setcontainer(data.results);
  })
  .catch(err =>{
    console.error(err)
  });
  }

 
  const onChangeHandeler =(e) =>{
    setEndpoints(e.target.value)
  }
    
  const keep=(e)=>{
    const updated=container.filter((data)=>{return data.id==e})
    setcontainer(updated)

  }
   
  const submitHandeler = e =>{
    e.preventDefault()
    setfinalpoint(endPoint) 
  }
  
  useEffect(() => {
    fetchMe ();
   },[finalpoint])
  //  console.log("hr",container)

   
    
    return (
      
      <div className="App">
      
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
        <form onSubmit={submitHandeler}>
        <div class="input-group mb-3">
        <input type="text" class="form-control" value={endPoint} onChange={onChangeHandeler } placeholder="enter movie name" aria-label="Recipient's username" aria-describedby="button-addon2"/>
        <button class="btn btn-outline-secondary" type="submit" id="button-addon2">Search</button>
        

            </div>
        </form>
        
            <div className="element">
          {container?.map((item,index) => {
            return (
              <div className="master">

            <div key={index} className="element-div">
              
            <img src ={item?.primaryImage?.url} style={{height:'15rem',width:"15rem"}} alt=""></img>
            <br></br>
            <div className="element11">
            <p  >TITLE:</p> 
          
            <p>{item?.titleText?.text}</p>
            </div>
            
            <button className='bu' onClick={()=>{
              keep(item.id)
            }}>Match</button>
            
            </div>
  
            </div>
          )
        })
        }
      
    </div>
    </div>
  );
}

export default App;
