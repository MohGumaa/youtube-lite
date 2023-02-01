import React, { createContext, useState, useEffect } from "react";
import { fetchDataFromApi } from "../utils/api";

export const ApiContext = createContext();

export const ApiContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState(false);
  const [selectCategories, setSelectCategories] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const fetchSelectedCategoryData = async (query) => {
      setLoading(true);
      try {
        const response = await fetchDataFromApi(`search/?q=${query}`);
        setSearchResult(response.contents);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    fetchSelectedCategoryData(selectCategories);
  }, [selectCategories]);

  return (
    <ApiContext.Provider
      value={{
        loading,
        setLoading,
        searchResult,
        setSearchResult,
        selectCategories,
        setSelectCategories,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
