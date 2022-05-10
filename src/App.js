import './App.css';
import Header from './myComponents/Header';
import Footer from './myComponents/Footer';
import List from './myComponents/List';

function App() {
  let list = [
    { sno: 1 ,
      Task : "This is the test case",
      desc : "This is done for the purpose of testing react"
    },
    { sno: 1 ,
      Task : "This is the test case",
      desc : "This is done for the purpose of testing react"
    },
    { sno: 1 ,
      Task : "This is the test case",
      desc : "This is done for the purpose of testing react"
    }
  ]
  return (
<>
<Header title="TestCase-React"/>
<List />
<Footer/>
</>
   );
}

export default App;
