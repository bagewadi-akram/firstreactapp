import './App.css';
import Header from './myComponents/Header';
import Footer from './myComponents/Footer';
import { Task } from './myComponents/Task';
import React, {useState} from 'react';


function App() {
  const onDelete = (list) =>{
    console.log(list)
    setlist(list.filter((a)=>{
      return a!==list
    }))
  }
  
   const [list, setlist] = useState([
    { sno : 1 ,
      Task : "Complete the first task",
      desc : "This is done for the purpose of testing react"
    },
    { sno: 2,
      Task : "Complete the Second task",
      desc : "This is done for the purpose of testing react"
    },
    { sno: 3,
      Task : "Complete the Thrid task",
      desc : "This is done for the purpose of testing react"
    },
    { sno: 4,
      Task : "Complete the Fourth task",
      desc : "This is done for the purpose of testing react"
    },
    { sno: 5,
      Task : "Complete the Fiveth task",
      desc : "This is done for the purpose of testing react"
    },
  ]);
  return (
<>
<Header title="TestCase-React"/>
<Task list={list} onDelete={onDelete}/>
<Footer/>
</>
   );
}

export default App;
