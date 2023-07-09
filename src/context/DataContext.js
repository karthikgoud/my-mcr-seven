import { createContext, useContext, useReducer } from "react";
import { data } from "../constants/data";

export const DataContext = createContext();

const initialState = {
  continents: data.continents,
};

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const DataProvider = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={{ data, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
