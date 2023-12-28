import './App.css';
import Banner from './components/banner/Banner';
import Header from './components/header/Header';
import StatusBar from './components/statusBar/StatusBar';

function App() {
  return (
    <div className="App">
      <StatusBar />
      <Header />
      <Banner />
    </div>
  );
}

export default App;
