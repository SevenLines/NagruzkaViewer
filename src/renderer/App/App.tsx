import {MemoryRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainPageView from "../MainPageView/MainPageView";
import OpenViewPage from "../OpenPageView/OpenPageView";
import {useNagruzkaStore} from "../../store/context";



const App = () => {
  const store = useNagruzkaStore()
  store.loadConfigFromUser()
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OpenViewPage/>}/>
        <Route path="/main" element={<MainPageView/>}/>
      </Routes>
    </Router>
  );
};

export default App;
