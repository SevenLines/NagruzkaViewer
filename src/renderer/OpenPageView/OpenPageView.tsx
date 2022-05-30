import {observer} from "mobx-react-lite";
import {useNagruzkaStore} from "../../store/context";
import {useState} from "react";
import {toJS} from "mobx";
import { useNavigate } from "react-router-dom";

const OpenViewPage = observer(() => {
  const store = useNagruzkaStore()
  const navigate = useNavigate();

  console.log(store.config)

  const [filenameSem1, setFilenameSem1] = useState("");
  const [filenameSem2, setFilenameSem2] = useState("");
  const [weeksCount, setWeeksCount] = useState(0);

  if (filenameSem1 === "" && filenameSem1 !== store.config.filenameSem1)
    setFilenameSem1(store.config.filenameSem1)

  if (filenameSem2 === "" && filenameSem2 !== store.config.filenameSem2)
    setFilenameSem2(store.config.filenameSem2)

  if (weeksCount === 0 && weeksCount !== store.config.weeksCount)
    setWeeksCount(store.config.weeksCount)

  function onClick() {
    store.setConfig({
      ...toJS(store.config),
      filenameSem1,
      filenameSem2,
      weeksCount
    })
    store.loadSemesters()
    navigate("/main")
  }

  async function selectFile(defaultPath: string, setFunc: any) {
    const file = await window.electron.openFile({
      defaultPath,
      filters: [{name: '*.xlsx', extensions: ['xlsx']}],
    });
    if (file) {
      setFunc(file);
    }
  }

  return (
    <div className="d-flex flex-column vh-100 align-items-center justify-content-center">
      <div className="d-flex flex-column">
        <div className="input-group mb-3" style={{width: "600px"}}>
          <input type="text" className="form-control" value={filenameSem1}
                 onChange={(e) => setFilenameSem1(e.target.value)}/>
          <button className="btn btn-outline-secondary" type="button"
                  onClick={() => selectFile(filenameSem1, setFilenameSem1)}>
            Семестр 1...
          </button>
        </div>
        <div className="input-group mb-3" style={{width: "600px"}}>
          <input type="text" className="form-control" value={filenameSem2}
                 onChange={(e) => setFilenameSem2(e.target.value)}/>
          <button className="btn btn-outline-secondary" type="button"
                  onClick={() => selectFile(filenameSem2, setFilenameSem2)}>
            Семестр 2...
          </button>
        </div>
        <div className="input-group mb-3" style={{width: "600px"}}>
          <div className="row align-items-center">
            <div className="col-auto">
              Количество недель
              </div>
            <div className="col w-100">
              <input type="number" className="form-control" value={weeksCount}
                     onChange={(e) => setWeeksCount(+e.target.value)}/>
            </div>
          </div>
        </div>
        <button className="btn btn-primary mb-3" onClick={onClick}>Открыть</button>
      </div>
    </div>
  )
})

export default OpenViewPage;
