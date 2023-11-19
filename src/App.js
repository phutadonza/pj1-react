import './App.css';
import Navbar from './components/Navbar';
import Container from './components/Container';
const Title =()=><h1>ระบบ</h1>
function App() {
  return (
    <div className="App">
      <Navbar />
      <Container />
    </div>
  );
}

export default App;