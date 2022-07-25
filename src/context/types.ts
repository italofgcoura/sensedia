import { ReactNode } from "react";

interface IHomeData {
  id?: number;
  title?: string;
  author?: string;
  createDate?: string;
  body?: string;
}

interface IHomeContext {
  loadHome: () => void;
  homeData: IHomeData[];
  filter: () => void;
  filtered: IHomeData[];
  handleSort: () => void;
  parameter: string;
  handleChangeParameter: (value: string) => void;
  handleClearParameter: () => void;
  currentItems: IHomeData[];
  setCurrentItems: (filtered: any) => void;
  viewType: string;
  handleChangeViewType: (type: string) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  ascSort: boolean;
  setAscSort: (ascSort: boolean) => void;
  dispatchPagination: boolean;
  // setDispatchPagination: (dispatchPagination: boolean) => void;
}

interface Props {
  children?: ReactNode;
}

export type { IHomeData, IHomeContext, Props };
