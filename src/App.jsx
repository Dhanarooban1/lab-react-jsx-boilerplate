import './App.css';
import elephant from "./images/elephant.jpeg";
import  AppClass from "./AppClass.jsx";
const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  const data = imageData();
  console.log(data);

  return(
    <>
   
  <div id="grid">
    {
    data.map((el) => {
    return <img src={el.img}/>})

    }

  </div>

   <AppClass/>

</>
  )
 
}

export default App;
