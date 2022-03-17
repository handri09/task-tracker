import { Home } from './Pages'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="container mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;