import logo from './logo.svg';
import './App.css';

import { useEffect,useState } from "react";
import NavBar from "./component/NavBar";
import CardNw from "./component/CardNw";
function App() {
  const [state,setstate]=useState([]);
  const [search,setSearch]=useState("in");
  useEffect(() => {
    fun();
  },[search]);
  const fun = async () => {
    const url=`https://newsapi.org/v2/everything?q=${search}&sortBy=publishedAt&apiKey=35a720ee94694582ae22cfe1a566a00b`
try{
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
  console.log(result);
  setstate(result.articles)
}catch{
  console.log("Error");
}  
  };
  function changeTopic(topic){
    setSearch("finance");
  }

  return (
    <div>
      <NavBar fin={changeTopic}/>
      <div className="container  ">
      <div className="row">
      {state.map((elem)=>{
        
     
             return <div className="col-md-4 my-4" key={elem.url}>
              <CardNw obj={elem}/>
          </div>
          
          

        })}
        </div>
        </div>
    </div>
  );
}
export default App;
