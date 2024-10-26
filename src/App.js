
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './ALL_Prod/Header';
import Footer from './ALL_Prod/Footer'
 import Press from './ALL_About/Press';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Header/>} >
       <Route path='press' element={<Press/>}/>
      <Route path='footer' element={<Footer/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
