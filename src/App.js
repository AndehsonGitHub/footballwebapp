import logo from './logo.svg';
import './App.css';
import 'normalize.css'
import 'concrete.css'
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blah from './pages/blah';
import Luton from './pages/Luton'

function App() {
  return (
    <main><section>
      <header><h3>Andehson Analytics: A home for my rambling football thoughts!</h3></header>
      <Router>
            <Navbar />
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/blah" element={<Blah />} />
                <Route path="/luton" element={<Luton />} />
                <Route path="/lutontable.jpg" element={<Luton />} />
            </Routes>
        </Router>
      </section>
    </main>
  );
}

export default App;
