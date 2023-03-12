import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Rightbar from './Components/Rightbar/Rightbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='bottom-container'>
        <Sidebar/>
        <Rightbar/>
      </div>
    </div>
  );
  <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
}

export default App;
