import React, { useState, useEffect } from 'react';
import './App.css';
import { Country, countriesData } from './models/Country';


const App: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>(countriesData);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    const allSelected = countries.every(country => country.selected);
    if (allSelected !== selectAll) {
      setSelectAll(allSelected);
    }
  }, [countries, selectAll]);

  const handleCheckboxChange = (index: number) => {
    const updatedCountries = [...countries];
    updatedCountries[index].selected = !updatedCountries[index].selected;
    setCountries(updatedCountries);
    setSelectAll(false);
  };

  const handleSelectAllChange = () => {
    const updatedCountries = countries.map(country => ({
      ...country,
      selected: !selectAll
    }));
    setCountries(updatedCountries);
    setSelectAll(!selectAll);
  };

  return (
    <div className="App">
     <div className="checkbox-container">
        <label>
          <input type="checkbox" checked={selectAll} onChange={handleSelectAllChange} />
          Select All
        </label>
     </div>
      {countries.map((country, index) => (
        <div  className="checkbox-container" key={index}>
          <label>
            <input
              type="checkbox"
              checked={country.selected}
              onChange={() => handleCheckboxChange(index)}
            />
            {country.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default App;


