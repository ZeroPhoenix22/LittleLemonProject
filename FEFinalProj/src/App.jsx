// import './App.css';
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import Reservations from './Components/Reservations/Reservations';
import './styles.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      {/* <Nav />
      <Main />
      <Footer /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='/reservations' element={<Reservations />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
