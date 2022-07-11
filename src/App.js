import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Nav from './components/Nav';
import Categories from './components/Categories';
import Bookscontainer from './components/Bookscontainer';
import Form from './components/Form';
import store from './configureStore';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
