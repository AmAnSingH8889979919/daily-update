 import React from 'react';
  import "./App.css";
 import Header from './Header';
 import moment from 'moment'
 import Plan from './component/plan';
    import Weather from './component/Weather';
   import News from './component/news';
 import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

   
 export default function App() {
   return (
     <div>
       <Router>
       <Header/>
       <b>{moment().format('dddd, Do MMM YY')}</b>
            <Routes>
                   <Route path='notes/'  element={ <Plan/>}></Route>
                <Route path='news/'  element={<News/>}></Route>
                <Route path='/' element={<Weather/>}></Route>

            </Routes>
        </Router>
     </div>
   )
 }
 