import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Message from './components/message/Message';
import Chat from './components/chat/Chat';
import Search from './components/search/Search';
import Deals from './components/deals/Deals';
import Requests from './components/requests/Requests';

// Redux
import { Provider } from 'react-redux';
import store from './store';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<div>Customer Support</div>} />
          <Route path='/message' element={<Message />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/search' element={<Search />} />
          <Route path='/requests' element={<Requests />} />
          <Route path="/deals" element={<Deals />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
