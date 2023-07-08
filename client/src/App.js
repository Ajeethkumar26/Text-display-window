import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Login} from "./component/Login";
import {TextDisplayPanel} from "./component/TextDisplayPanel";
import {Navigation} from './component/navigation';
import Register from './component/Register';
// import {Logout} from './component/logout';

function App() {

  let isauth=localStorage.getItem('isauth');
  return (
   
    <div>{
      isauth?(
      <TextDisplayPanel></TextDisplayPanel>
      ):(<Login>

          </Login>)}
     
     </div>

  
  )
}
export default App;
