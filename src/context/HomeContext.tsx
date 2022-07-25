import React, { useState, createContext, useCallback, useEffect } from "react";

import { getHomeData } from "../services/Home";

import { IHomeData, IHomeContext, Props } from "./types";

import { initialValue } from "./initialValues";

const HomeContext = createContext<IHomeContext>(initialValue);

function Home({ children }: Props) {
  const [homeData, setHomeData] = useState(initialValue.homeData);

  const [filtered, setFiltered] = useState(initialValue.filtered);

  const [parameter, setParameter] = useState(initialValue.parameter);

  const [viewType, setViewType] = useState(initialValue.viewType);

  const [currentItems, setCurrentItems] = useState<any>(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setFiltered(homeData);
  }, [homeData]);

  const loadHome = useCallback(async () => {
    setLoading(true);
    let temp: any = [];
    try {
      temp = await getHomeData();
      treatData(temp.data);
    } catch (error) {
      return [];
    } finally {
      setLoading(false);
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

  const handleChangeParameter = (value: string) => {
    setParameter(value);
  };

  const handleClearParameter = () => {
    setParameter("");
    setFiltered(homeData);
  };

  const handleChangeViewType = (type: string) => {
    setViewType(type);
  };

  console.log(loading);

  return (
    <HomeContext.Provider
      value={{
        loadHome,
        homeData,
        filter,
        filtered,
        currentItems,
        setCurrentItems,
        handleChangeParameter,
        parameter,
        handleClearParameter,
        viewType,
        handleChangeViewType,
        loading,
        setLoading,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}

export { Home, HomeContext };
