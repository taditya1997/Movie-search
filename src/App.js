import './App.css';
import SearchComponent from'./SearchComponent';
import Movielist from './Movielist';
import store from './Redux/store';
import {Provider} from "react-redux";
function App() {
  return (
    <Provider store={store}>
    <div className="container" >
      <div className="title"><h1>Movie Search App</h1></div>
      <div className="movies">
      <SearchComponent/>
      
      </div>
      <Movielist/>
    </div>
    </Provider>
  );
}

export default App;
