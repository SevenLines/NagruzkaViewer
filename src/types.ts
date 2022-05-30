import {round} from "lodash";

export enum NagruzkType {
  Shtat,
  Chasovik,
  Sovmeshenie,
}

export enum NagruzkaCellType {
  All = 'All',
  Lect = 'Lect',
  Prac = 'Prac',
  Lab = 'Lab',
  Cons = 'Cons',
  Exam = 'Exam',
  Zach = 'Zach',
  KursR = 'KursR',
  KursP = 'KursP',
  Dip = 'Dip',
  UchPr = 'UchPr',
  PrPr = 'PrPr',
  GEK = 'GEK',
  RGR = 'RGR',
  ZachOc = 'ZachOc',
  Kontr = 'Kontr',
  Asp = 'Asp',
  Mag = 'Mag',
}

export interface NagruzkTypeInfo {
  title: string;
  klass: string;
}

export interface NagruzkaLine {
  title: string;
  students: number;
  faculty: string;
  hLect: number;
  hPrac: number;
  hLab: number;
  hCons: number;
  hExam: number;
  hZach: number;
  hKursR: number;
  hKursP: number;
  hDip: number;
  hUchPr: number;
  hPrPr: number;
  hGEK: number;
  hRGR: number;
  hZachOc: number;
  hKontr: number;
  hAsp: number;
  hMag: number;
  teacher: string;
  sem: number,
  type: NagruzkType;
}

export interface NagruzkaConfig {
  filenameSem1: string
  filenameSem2: string
  lastTeacher: string
  weeksCount: number
  changes: Array<any>
}

export interface MoveCellInfo {
  row: NagruzkaLine,
  cellType: NagruzkaCellType
}

abstract class NagruzkaAction {
  abstract up(row: Array<NagruzkaLine>): void;
  abstract down(row: Array<NagruzkaLine>): void;
}

// class NagruzkaChangeAction extends NagruzkaAction {
//   constructor() {
//     super();
//   }
//
//   up(row: Array<NagruzkaLine>) {
//   }
//
//   down(row: Array<NagruzkaLine>) {
//   }
// }

export function getNagruzkaLineTotal(x: NagruzkaLine) {
  return round(x.hLect + x.hPrac + x.hLab + x.hCons + x.hExam + x.hZach + x.hKursR + x.hKursP
          + x.hDip + x.hUchPr + x.hPrPr + x.hGEK + x.hRGR + x.hZachOc + x.hKontr + x.hAsp + x.hMag, 2)
}

export function GetNagruzkTypeInfo(nt: NagruzkType): NagruzkTypeInfo {
  return {
    [NagruzkType.Shtat]: {
      title: "Штатная",
      klass: "table-row-stat",
    },
    [NagruzkType.Chasovik]: {
      title: "Почасовка",
      klass: "table-row-pochasovka",
    },
    [NagruzkType.Sovmeshenie]: {
      title: "Совмещение",
      klass: "table-row-sovmeshenie",
    },
  }[nt];
}
