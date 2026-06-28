import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './App.css';
import Page1 from './pages/Page1';
import { GlobalProvider } from './context/Global';
import Page3 from './pages/Page3';
import Login from './pages/Login';
import Signup from './pages/Signup';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';

function App() {
  const { location } = window;

  const pathname = location.pathname;

  console.log('location', pathname);
  return (
    <>
      {/* <h1>Vijay</h1>
      <GlobalProvider>
        <Page1  />
      <Page3/>
      </GlobalProvider> */}

      {/* <BrowserRouter>
        <nav style={{
          display: 'flex',
          gap: "10px"
        }}>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter> */}
      {/* <nav
        style={{
          display: 'flex',
          gap: '10px',
        }}
      >
        <a href="/login">Login</a>
        <a href="/signup">Signup</a>
      </nav>

      {pathname === '/login' ? (
        <Login />
      ) : pathname === '/signup' ? (
        <Signup />
      ) : (
        <h1>
          We're sorry. The Web address you entered is not a functioning page on
          our site.
        </h1>
      )} */}
      {/* <Login />
      <Signup /> */}
    </>
  );
}

export default App;
