import { Header } from './components/Header';
import { BrowserRouter }  from 'react-router-dom';
import { AllRoutes } from './routes/AllRoutes';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <AllRoutes />
    </BrowserRouter>
  );
}

export default App;
