import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Categories from './components/Categories';
import Bookscontainer from './components/Bookscontainer';
import Form from './components/Form';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={(
            <div className="App">
              <Bookscontainer />
              <Form />
            </div>
          )}
        />
        <Route
          path="/Categories"
          element={(
            <div className="App">
              <Categories />
            </div>
        )}
        />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
