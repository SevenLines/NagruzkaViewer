import {Form} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {useNagruzkaStore} from "../../store/context";
import {round} from "lodash";
import classNames from "classnames";

const Header = observer(() => {
  const store = useNagruzkaStore();
  const totalHours = round(store.totalBySem1.total + store.totalBySem2.total, 2);

  return (
    <div className="d-flex align-items-center">
        <div className="p-2">
          <h4 className="mb-0 ">
            <span>Всего: <span>{totalHours}</span></span>
          </h4>
          <span className="badge bg-info">
            <span>Аудиторная: </span>
            <span>{store.totalBySem1.auditory}(~{round(store.totalBySem1.auditory / store.config.weeksCount / 2, 1)}пр.) </span>
            <span>+ {store.totalBySem2.auditory}(~{round(store.totalBySem2.auditory / store.config.weeksCount / 2, 1)}пр.)</span>
          </span>
        </div>
        <div className="btn btn-group align-self-stretch">
          <button className={classNames("btn", {
            "btn-primary": store.selectedSem === 1,
            "btn-outline-primary": store.selectedSem !== 1
          })} onClick={() => store.setSelectedSem(1)}>Осенний {store.totalBySem1.total} =
            {store.totalBySem1.shtat > 0 &&
              <span className="badge bg-stat text-black ms-1">+{store.totalBySem1.shtat}</span>}
            {store.totalBySem1.chasovik > 0 &&
              <span className="badge bg-pochasovka text-black ms-1">+{store.totalBySem1.chasovik}</span>}
            {store.totalBySem1.sovmeshenie > 0 &&
              <span className="badge bg-sovmeshenie text-black ms-1">+{store.totalBySem1.sovmeshenie}</span>}
          </button>
          <button className={classNames("btn", {
            "btn-primary": store.selectedSem === 2,
            "btn-outline-primary": store.selectedSem !== 2
          })} onClick={() => store.setSelectedSem(2)}>Весенний {store.totalBySem2.total}
            {store.totalBySem2.shtat > 0 &&
              <span className="badge bg-stat text-black ms-1">+{store.totalBySem2.shtat}</span>}
            {store.totalBySem2.chasovik > 0 &&
              <span className="badge bg-pochasovka text-black ms-1">+{store.totalBySem2.chasovik}</span>}
            {store.totalBySem2.sovmeshenie > 0 &&
              <span className="badge bg-sovmeshenie text-black ms-1">+{store.totalBySem2.sovmeshenie}</span>}
          </button>
        </div>
        <div className="flex-grow-1" />
        <Form.Select className="col" value={store.selectedTeacher} onChange={(e) => {
          store.setSelectedTeacher(e.target.value)
        }}>
          <option value="">-</option>
          {store.teachers.map((x: string) => (
            <option value={x} key={x}>{x}</option>
          ))}
        </Form.Select>
      </div>
  )
})

export default Header;
