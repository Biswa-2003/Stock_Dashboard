import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import Sidebar from './components/Sidebar';
import ChartDisplay from './components/ChartDisplay';

const App = () => {
  const [data, setData] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://raw.githubusercontent.com/shaktids/stock_app_test/refs/heads/main/dump.csv'
        );
        const csvText = await response.text();
        
        const parsedData = Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true
        });

        console.log(parsedData.data);  // Debugging - See the parsed data in console
        setData(parsedData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleCompanySelect = (company) => {
    setSelectedCompany(company);
  };

  return (
    <div className="container">
      <Sidebar data={data} onSelect={handleCompanySelect} />
      <ChartDisplay data={data} selectedCompany={selectedCompany} />
    </div>
  );
};

export default App;
