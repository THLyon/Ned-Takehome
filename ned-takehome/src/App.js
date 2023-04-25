import {useEffect, useState} from 'react';
import Header from './components/Header'; 
// import LeftPanel from './components/LeftPanel/LeftPanel'; 
// import RightPanel from './components/RightPanel/RightPanel'; 
// import DesktopButtons from './components/DesktopButtons';

import './App.css';

  //!To-Do: 
    //*Generic Setup
    //*left panel
      //
    //* right panel 

const App = () => {
const [loanData, setLoanData] = useState({}); 
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Ned-Helps/demo-repository/main/config.json')
      .then(res => res.json())
      .then(data => setLoanData(data))
  }, []); 

  console.log(loanData); 

  return (
    <div className="App">
      <Header />
      {/* <LeftPanel />
      <RightPanel/>
      <DesktopButtons/> */}
    </div>
  );
}

export default App;
