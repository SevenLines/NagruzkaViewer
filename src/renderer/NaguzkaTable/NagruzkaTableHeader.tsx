import {observer} from "mobx-react";
import {useNagruzkaStore} from "../../store/context";
import classNames from "classnames";
import {NagruzkaCellType} from "../../types";
import _ from "lodash";

const NagruzkaTableHeader = observer(() => {
  const store = useNagruzkaStore();

  return (
    <>
      <table className="table mb-0" style={{tableLayout: "fixed"}}>
        <thead>
        <tr>
          <th style={{width: "400px"}}>Название</th>
          <th style={{width: "calc((100% - 400px) / 17)"}} className={classNames({active: NagruzkaCellType.Lect === store.hoveredCellType})}>Лек</th>
          <th style={{width: "calc((100% - 400px) / 17)"}} className={classNames({active: NagruzkaCellType.Prac === store.hoveredCellType})}>Прак</th>
          <th style={{width: "calc((100% - 400px) / 17)"}} className={classNames({active: NagruzkaCellType.Lab === store.hoveredCellType})}>Лаб</th>
          <th style={{width: "calc((100% - 400px) / 17)"}} className={classNames({active: NagruzkaCellType.Cons === store.hoveredCellType})}>Конс</th>
          <th style={{width: "calc((100% - 400px) / 17)"}} className={classNames({active: NagruzkaCellType.Exam === store.hoveredCellType})}>Экз</th>
          <th style={{width: "calc((100% - 400px) / 17)"}} className={classNames({active: NagruzkaCellType.Zach === store.hoveredCellType})}>Зач</th>
          <th style={{width: "calc((100% - 400px) / 17)"}} className={classNames({active: NagruzkaCellType.KursR === store.hoveredCellType})}>КурсР</th>
          <th style={{width: "calc((100% - 400px) / 17)"}} className={classNames({active: NagruzkaCellType.KursP === store.hoveredCellType})}>КурсП</th>
          <th style={{width: "calc((100% - 400px) / 17)"}} className={classNames({active: NagruzkaCellType.Dip === store.hoveredCellType})}>Дип</th>
          <th style={{width: "calc((100% - 400px) / 17)"}} className={classNames({active: NagruzkaCellType.UchPr === store.hoveredCellType})}>УчПр</th>
          <th style={{width: "calc((100% - 400px) / 17)"}} className={classNames({active: NagruzkaCellType.PrPr === store.hoveredCellType})}>ПрПр</th>
          <th style={{width: "calc((100% - 400px) / 17)"}} className={classNames({active: NagruzkaCellType.GEK === store.hoveredCellType})}>ГЭК</th>
          <th style={{width: "calc((100% - 400px) / 17)"}} className={classNames({active: NagruzkaCellType.RGR === store.hoveredCellType})}>РГР</th>
          <th style={{width: "calc((100% - 400px) / 17)"}} className={classNames({active: NagruzkaCellType.ZachOc === store.hoveredCellType})}>ЗачОц</th>
          <th style={{width: "calc((100% - 400px) / 17)"}} className={classNames({active: NagruzkaCellType.Kontr === store.hoveredCellType})}>Контр</th>
          <th style={{width: "calc((100% - 400px) / 17)"}} className={classNames({active: NagruzkaCellType.Asp === store.hoveredCellType})}>Аспир</th>
          <th style={{width: "calc((100% - 400px) / 17)"}} className={classNames({active: NagruzkaCellType.Mag === store.hoveredCellType})}>Маг</th>
        </tr>
        </thead>
      </table>
    </>
  )
})

export default NagruzkaTableHeader
