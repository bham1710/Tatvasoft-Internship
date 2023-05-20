import './App.css';

import {Routes, Route, Link, BrowserRouter} from 'react-router-dom';

import {HomePage} from './HomePage';
import {Apple} from './Apple';
import {NotFound} from './NotFound';

const App = () =>  (
  <BrowserRouter>
    <div>
      <Link
        to= "/"
        style={{marginLeft: 55,
        }}
      >
        Home
      </Link>
      <Link 
        to= "/apple"
        style={{marginLeft: 5,
        }}
      > 
        Apple
      </Link>  
      <Link 
        to= "/applet"
        style={{marginLeft: 5,
        }}
        > Applet </Link>
    </div>
    <Routes>
      <Route path="/"element={<HomePage/>}></Route>
      <Route path="/apple"element={<Apple/>}></Route>
      <Route path="*"element={<NotFound/>}></Route>
    </Routes>
  </BrowserRouter>
);

export default App;