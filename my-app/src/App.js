/*
  Fionn McCarthy
  g00414386@atu.ie 
  Data Representation and Querying Lab 2
*/

// import routing components
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import app components
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
  // displays a navigation bar that changes the component displayed based on the route
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/home" element={<Content />} />
        <Route path="/read" element={<Footer />} />
        <Route path="/create" element={<Header />} />
      </Routes>
    </Router>
  );
}

export default App;