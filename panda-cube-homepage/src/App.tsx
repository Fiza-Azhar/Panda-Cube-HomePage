import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/home'; // Adjust if needed

const App: React.FC = () => {
  console.log('App component is rendering');
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
