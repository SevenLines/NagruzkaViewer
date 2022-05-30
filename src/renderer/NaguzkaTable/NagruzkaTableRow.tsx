import {observer} from "mobx-react-lite";
import {NagruzkaCellType, NagruzkaLine, NagruzkType, NagruzkTypeInfo} from "../../types";
import {useNagruzkaStore} from "../../store/context";
import {MouseEvent} from "react";
import classNames from "classnames";

const NagruzkaTableRow = observer(({row, typeInfo}: {
  row: NagruzkaLine, typeInfo: NagruzkTypeInfo
}) => {
  const store = useNagruzkaStore();

  function onCellClick(e: MouseEvent, cellType: NagruzkaCellType) {
    store.setClickedPosition({
      left: e.clientX,
      top: e.clientY,
    });
    store.setMoveCellInfo({
      row,
      cellType
    });
  }

  function moveTo(type: NagruzkType, cellType: NagruzkaCellType, value: number) {
    store.moveNagruzkaRow(row, value, cellType, type, row.teacher);
  }

  return (
    <tr className={typeInfo.klass} key={row.title} onMouseOver={() => store.setHoveredRow(row)}>
      <td className={classNames({'is-hovered': row === store.hoveredRow})}>{row.title}
        <span className="badge btn-info ms-2">{row.students}</span>
      </td>
      {
        [
          'Lect',
          'Prac',
          'Lab',
          'Cons',
          'Exam',
          'Zach',
          'KursR',
          'KursP',
          'Dip',
          'UchPr',
          'PrPr',
          'GEK',
          'RGR',
          'ZachOc',
          'Kontr',
          'Asp',
          'Mag',
        ].map((x: string) => {
          const value = (row as any)[`h${x}`];
          const cellType = NagruzkaCellType[x as keyof typeof NagruzkaCellType];
          const isActive = store.moveCellInfo?.row === row && store.moveCellInfo.cellType === cellType;
          return (
            <td
              className={classNames("position-relative", {'is-hovered': cellType === store.hoveredCellType || row === store.hoveredRow})}
              key={x}
              onMouseOver={() => store.setHoveredCellType(cellType)}
              onMouseLeave={() => store.setMoveCellInfo(null)}
              onClick={(e) => !isActive && onCellClick(e, cellType)}>
              {value > 0 && value}
              {isActive && (
                <div className="action-selector">
                  <div className="d-flex flex-column">
                    <div className="btn-group d-flex">
                      <button className="btn col btn-warning"
                           onClick={() => moveTo(NagruzkType.Shtat, cellType, value)}>В штатную
                      </button>
                      <button className="btn btn-warning active">другому...</button>
                    </div>
                    <div className="btn-group d-flex">
                      <button className="btn col mt-2 btn-warning"
                           onClick={() => moveTo(NagruzkType.Chasovik, cellType, value)}>В почасовку
                      </button>
                      <button className="btn btn-warning active">другому...</button>

                    </div>
                    <div className="btn-group d-flex">
                      <button className="btn col mt-2 btn-warning"
                           onClick={() => moveTo(NagruzkType.Sovmeshenie, cellType, value)}>В совмещение
                      </button>
                      <button className="btn btn-warning active">другому...</button>
                    </div>
                  </div>
                </div>
              )}
            </td>
          )
        })
      }
    </tr>
  )
});

export default NagruzkaTableRow;
