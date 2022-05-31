import {observer} from "mobx-react-lite";
import Header from "./Header";
import NagruzkaTable from "../NaguzkaTable/NagruzkaTable";
import NagruzkaTableHeader from "../NaguzkaTable/NagruzkaTableHeader";

const MainPageView = observer(() => {
  return (
    <div className="container-fluid vh-100 d-flex flex-column">
      <Header/>
      <div style={{marginRight: "17px"}}>
        <NagruzkaTableHeader />
      </div>
      <div className="flex-grow-1" style={{"overflowY": "scroll"}}>
        <NagruzkaTable/>
      </div>
    </div>
  );
});

export default MainPageView
