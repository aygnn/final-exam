
import './App.css';
import Navbar from './Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';

import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
       <Helmet>
      <title>Home Page</title>
    </Helmet>
      <Navbar/>
      <Outlet/>
      <Footer/>

    </div>
  );
}

export default App;
