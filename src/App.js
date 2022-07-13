import './App.css';
import Navbar from './Components/Navigation Component/navigation.component';
import Cover from './Components/Cover Component/cover.component';
import About from './Components/About Component/about.component';
import MainContent from './Components/Main Contents/MainContent.component';

function App() {
  return (
    <div className='container'>
      <Navbar/>
      <Cover/>
      <About/>
      <MainContent/>
    </div>
  );
}

export default App;
