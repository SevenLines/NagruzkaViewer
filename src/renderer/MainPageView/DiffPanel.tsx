import {observer} from "mobx-react";
import {useNagruzkaStore} from "../../store/context";
import {GetNagruzkTypeInfo} from "../../types";

const DiffPanel = observer(() => {
  const store = useNagruzkaStore()
  console.log("cool");
  return (
    <div>
      {store.nagruzkaDiff.map((x) => {
        return (
          <div>
            <span className="badge bg-danger ms-2">{x.title}</span>
            <span className="badge bg-danger ms-2">Изменение: {x.diff}</span>
            <span className="badge bg-danger ms-2">{x.key}</span>
            <span className="badge bg-danger ms-2">Семестр: {x.sem}</span>
            <span className="badge bg-danger ms-2">{x.teacher}</span>
            <span className="badge bg-danger ms-2">{x.type}</span>
            <hr/>
          </div>
        )
      })}
    </div>
  )
})


export default DiffPanel
