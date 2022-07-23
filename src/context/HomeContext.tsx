import React, {
  useState,
  createContext,
  ReactNode,
  useCallback,
  useEffect,
} from "react";

import { getHomeData } from "../services/Home";

import { IHomeData, IHomeContext, Props } from "./types";

import { initialValue } from "./initialValues";

// import { api } from "../httpClient";
// import { setEnvironmentData } from "worker_threads";
// import { isBigIntLiteral } from "typescript";

const HomeContext = createContext<IHomeContext>(initialValue);

function Home({ children }: Props) {
  const [homeData, setHomeData] = useState(initialValue.homeData);

  const [filtered, setFiltered] = useState(initialValue.filtered);

  const [parameter, setParameter] = useState(initialValue.parameter);

  const [viewType, setViewType] = useState(initialValue.viewType);

  useEffect(() => {
    setFiltered(homeData);
  }, [homeData]);

  const loadHome = useCallback(async () => {
    let temp: any = [];
    try {
      temp = await getHomeData();
      treatData(temp.data);
    } catch (error) {
      return [];
    }
  }, []);

  const treatData = useCallback((rawData: object[]) => {
    let temp: any = [];
    rawData.forEach((item: IHomeData) => {
      temp.push({
        ...item,
        author: "John Doe",
        createDate: "12/22/2021 05:30:00 PM",
      });
    });
    console.log("temp", temp);
    setHomeData(temp);
  }, []);

  const filter = () => {
    if (!parameter) {
      setFiltered(homeData);
      return;
    }
    setFiltered(
      homeData.filter((item: IHomeData) => item?.title?.includes(parameter))
    );
  };

  console.log("parameter", parameter);

  const handleChangeParameter = (value: string) => {
    setParameter(value);
  };

  const handleClearParameter = () => {
    console.log("clear");
    setParameter("");
    setFiltered(homeData);
  };

  const handleChangeViewType = (type: string) => {
    setViewType(type);
  };

  return (
    <HomeContext.Provider
      value={{
        loadHome,
        homeData,
        filter,
        filtered,
        handleChangeParameter,
        parameter,
        handleClearParameter,
        viewType,
        handleChangeViewType,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}

export { Home, HomeContext };
