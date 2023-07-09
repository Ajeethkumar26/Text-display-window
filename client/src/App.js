import './App.css';
import {Login} from "./component/Login";
import {TextDisplayPanel} from "./component/TextDisplayPanel";

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
