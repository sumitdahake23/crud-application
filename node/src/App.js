import "./App.css";
import {useState} from 'react'
import Loginpage from "./component/Loginpage";
import Postuser from "./component/Postuser";
// import Formdata from './component/Formdata';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Getdata from "./component/Getdata";
// import Success from "./component/Success";
import Searchbar from "./component/Searchbar";
// import Update from "./component/Update";


function App() {
  const [user,setLoginUser]=useState({})
  return (
      
        <div className="App" >
            <Router>
                <Switch>
        <Route exact path="/" >
            {
                user && user._id?
                <Getdata setLoginUser={setLoginUser}/>
                :
                <Loginpage setLoginUser={setLoginUser}/>
            }
            </Route>
        <Route path="/login">
            <Loginpage setLoginUser={setLoginUser}/>
            </Route>
        <Route path="/postuser" component={Postuser}/>
        
        {/* <Route path="/succsss" component={Success}/> */}
        <Route path="/Searchbar" component={Searchbar}/>
        {/* <Route path="/upuser" component={Update}/> */}
        <Route path="/up" component={Getdata}/>
          
                </Switch>
                </Router>   
   
      {/* // <Router>
      //   <Switch>
      //     <Route path="/login" component={Loginpage} />
      //     <Route path="/" component={Postuser} />
      //     <Route path="/success" component={Success} />
      //   </Switch>
      // </Router> */}
      {/* <Searchbar/> */}
    </div>
  );
}

export default App;
