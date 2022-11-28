import './App.css';
import TaskCard from "./components/TaskCard/Task.js"

function App() {

  const tasks = [{ title:"C-language",deadline:"📅2Feb"},{ title:"C++",deadline:"📅2Jan"},{ title:"ICP",deadline:"📅25Dec"},{ title:"Data Structures",deadline:"📅20Jan"}]

  return (
    <>
      {
        tasks.map((element,i)=>{

          return(<TaskCard title = {element.title} deadline ={element.deadline}/>)
        })
      }

    </>
     
  );
}

export default App;
