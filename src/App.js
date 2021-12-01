import logo from './logo.svg';
import './App.css';
import Mainpage from './pages/Mainpage';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Mainpage/>
    </div>
    </Provider>
  );
}

export default App;
