import { Home, Priorities } from './Pages'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="container mx-auto">
      <Routes>
        <Route path="/task-tracker/" element={<Home />} />
        <Route path="/task-tracker/priorities" element={<Priorities />} />
      </Routes>
    </div>
  );
}

export default App;