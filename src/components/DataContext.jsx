import { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [formData, setFormData] = useState(null);

  const updateFormData = (data) => {
    setFormData(data);
  };

  return (
    <DataContext.Provider value={{ formData, updateFormData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};