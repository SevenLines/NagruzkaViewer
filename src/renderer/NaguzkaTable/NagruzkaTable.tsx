import _ from 'lodash';
import {observer} from "mobx-react-lite";
import {useNagruzkaStore} from "../../store/context";
import NagruzkaTableRow from "./NagruzkaTableRow";
import {GetNagruzkTypeInfo, NagruzkType} from "../../types";
import "./NagruzkaTable.scss";

const NagruzkaTable = observer(() => {
  const store = useNagruzkaStore();


  return (
    <>
      <table className="table w-100" style={{tableLayout: "fixed"}}>
        <tbody>
        {_(store.selectedNagruzkaGroupedByType).map((info, key: NagruzkType) => {
            const typeInfo = GetNagruzkTypeInfo(key);
            return (
              <>
                <tr className="p-0">
                  <td style={{width: "400px"}} className="p-0"/>
                  {Array.from(Array(17).keys()).map(_x => (
                    <td  className="p-0" style={{width: "calc((100% - 400px) / 17)"}}/>
                  ))}
                </tr>
                <tr className={typeInfo.klass} key={key}>
                  <th colSpan={18}>{typeInfo.title} | часов: {info.total}</th>
                </tr>
                {
                  info.items.map((x, index) => (
                    <NagruzkaTableRow typeInfo={typeInfo} row={x} key={index}/>
                  ))
                }
              </>
            )
          }
        ).value()}
        </tbody>
      </table>
    </>
  )
})

export default NagruzkaTable;
