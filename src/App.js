import logo from './logo.svg';
import './App.css';
import Background from './components/background'
import Navbar from './components/navbar';
import Type from './components/typing';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './components/style.css';
import Music from './components/Music';




function App() {
  return (
    <div >
        {/* <Background/> */}
        <Navbar />
        <Type/>
        <Music/>
    </div>
  )
}

export default App;
