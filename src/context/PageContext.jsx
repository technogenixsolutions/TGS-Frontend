"use client";
import { getCookie } from "cookies-next";
import { createContext, useEffect, useReducer, useState } from "react";
import { getApiCall } from "@/api/fatchData";

export const PageContext = createContext();

const pageReducer = (state, action) => {
  switch (action.type) {
    case "ADD_HOME_DATA":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default function PageContextProvider({ children }) {
  const hostName = "localhost";

  const [state, dispatch] = useReducer(pageReducer, {
    homedata: null,
  });

  const fetchHomeData = async () => {
    try {
      const response = await getApiCall("auth/me");
      if (response?.statusCode === 200 && response?.data) {
        dispatch({ type: "ADD_HOME_DATA", payload: response?.data });
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (!state?.homedata) {
      fetchHomeData();
    }
  }, [hostName, state]);

  return (
    <PageContext.Provider value={{ state, dispatch }}>
      {children}
    </PageContext.Provider>
  );
}
