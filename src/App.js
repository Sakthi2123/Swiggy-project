
import './App.css';
import Header from './Header/Header';
// import Body from './Body/Body';
import Footer from './Footer/Footer';
import Footerend from './Footer/Footerend'
import { Outlet } from 'react-router-dom';



function App() {
  return (
    <div className="App px-5 py-5  ">
     <Header/>
     <Outlet/>
     <Footer/>
     <Footerend/>
    
    </div>
  );
}

export default App;
