import Header from './components/Header';
import Sidebar from './components/Sidebar';
import UserInfo from './components/UserInfo';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='content'>
        <Sidebar />
        <UserInfo />
      </div>
    </div>
  );
}

export default App;
