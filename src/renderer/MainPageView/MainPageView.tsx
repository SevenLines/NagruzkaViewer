import {observer} from "mobx-react-lite";
import Header from "./Header";
import NagruzkaTable from "../NaguzkaTable/NagruzkaTable";
import DiffPanel from "./DiffPanel";

const MainPageView = observer(() => {
  return (
    <div className="container-fluid vh-100" style={{"overflowY": "auto"}}>
      <div className="row">
        <div className="col">
          <Header/>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <NagruzkaTable/>
        </div>
      </div>
    </div>
  );
});

export default MainPageView
