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

  const [currentItems, setCurrentItems] = useState<any>(
    initialValue.currentItems
  );

  const [loading, setLoading] = useState(initialValue.loading);

  const [ascSort, setAscSort] = useState(initialValue.ascSort);

  const [dispatchPagination, setDispatchPagination] = useState(
    initialValue.dispatchPagination
  );

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

  useEffect(() => {
    handleSort();
  }, [ascSort]);

  const handleSort = () => {
    if (ascSort)
      setFiltered(
        filtered.sort((a: any, b: any) => {
          if (a?.title! > b?.title!) {
            return 1;
          }

          if (a?.title! < b?.title!) {
            return -1;
          }

          return 0;
        })
      );
    else {
      setFiltered(
        filtered.sort((a: any, b: any) => {
          if (a?.title! < b?.title!) {
            return 1;
          }
          if (a?.title! > b?.title!) {
            return -1;
          }
          return 0;
        })
      );
    }
    setDispatchPagination(!dispatchPagination);
  };

  console.log("filtered", filtered);

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
        handleSort,
        ascSort,
        setAscSort,
        dispatchPagination,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}

export { Home, HomeContext };
