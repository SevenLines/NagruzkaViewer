import _ from 'lodash';
import {observer} from "mobx-react-lite";
import {useNagruzkaStore} from "../../store/context";
import NagruzkaTableRow from "./NagruzkaTableRow";
import {GetNagruzkTypeInfo, NagruzkaCellType, NagruzkType} from "../../types";
import "./NagruzkaTable.scss";
import classNames from 'classnames';

const NagruzkaTable = observer(() => {
  const store = useNagruzkaStore();


  return (
    <>

      <table className="table">
        <thead>
        <tr>
          <th style={{width: "400px"}}>Название</th>
          <th className={classNames({active: NagruzkaCellType.Lect === store.hoveredCellType})}>Лек</th>
          <th className={classNames({active: NagruzkaCellType.Prac === store.hoveredCellType})}>Прак</th>
          <th className={classNames({active: NagruzkaCellType.Lab === store.hoveredCellType})}>Лаб</th>
          <th className={classNames({active: NagruzkaCellType.Cons === store.hoveredCellType})}>Конс</th>
          <th className={classNames({active: NagruzkaCellType.Exam === store.hoveredCellType})}>Экз</th>
          <th className={classNames({active: NagruzkaCellType.Zach === store.hoveredCellType})}>Зач</th>
          <th className={classNames({active: NagruzkaCellType.KursR === store.hoveredCellType})}>КурсР</th>
          <th className={classNames({active: NagruzkaCellType.KursP === store.hoveredCellType})}>КурсП</th>
          <th className={classNames({active: NagruzkaCellType.Dip === store.hoveredCellType})}>Дип</th>
          <th className={classNames({active: NagruzkaCellType.UchPr === store.hoveredCellType})}>УчПр</th>
          <th className={classNames({active: NagruzkaCellType.PrPr === store.hoveredCellType})}>ПрПр</th>
          <th className={classNames({active: NagruzkaCellType.GEK === store.hoveredCellType})}>ГЭК</th>
          <th className={classNames({active: NagruzkaCellType.RGR === store.hoveredCellType})}>РГР</th>
          <th className={classNames({active: NagruzkaCellType.ZachOc === store.hoveredCellType})}>ЗачОц</th>
          <th className={classNames({active: NagruzkaCellType.Kontr === store.hoveredCellType})}>Контр</th>
          <th className={classNames({active: NagruzkaCellType.Asp === store.hoveredCellType})}>Аспир</th>
          <th className={classNames({active: NagruzkaCellType.Mag === store.hoveredCellType})}>Маг</th>
        </tr>
        </thead>
        <tbody>
        {_(store.selectedNagruzkaGroupedByType).map((info, key: NagruzkType) => {
            const typeInfo = GetNagruzkTypeInfo(key);
            return (
              <>

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
