import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile';



const arr =[ 
  "Hi it's me Hend!",
  "i m a student at Go My Code",
  "my goal is to be successful in my studies ",
  "and achieve my dream of becoming a web developer",
];
function App() {

  const handlName =(userName)=>
    alert(`this is ${userName}`);

  return (
    <div className="App">

     <img  style={{width:'400px',height:'400px'}}  src='/img.png' alt=''></img> 
  <Profile 
  FullName="Hend chaffar" 
  bio={arr} 
  profession="Student"  
  handlName={handlName} >
    
  </Profile>
    </div>
  );
}

export default App;

