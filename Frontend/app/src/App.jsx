import './App.css';
import { Route, Routes} from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login/' element={<LoginPage/>} />
        <Route path='/logout/' element={<LogoutPage/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
