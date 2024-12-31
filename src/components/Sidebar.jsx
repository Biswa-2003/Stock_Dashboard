import React from 'react';

const Sidebar = ({ data, onSelect }) => {
  if (!data || data.length === 0) {
    return <div className="sidebar">No data available</div>;
  }

  
  const companyKey = 'index_name';

  const companies = [...new Set(data.map(item => item[companyKey]))];

  console.log('Extracted Companies (Index Names):', companies);  

  return (
    <div className="sidebar">
      {companies.length > 0 ? (
        companies.map((company, index) => (
          <div
            key={`${company}-${index}`}
            className="company"
            onClick={() => onSelect(company)}
          >
            {company}
          </div>
        ))
      ) : (
        <div>No companies found</div>
      )}
    </div>
  );
};

export default Sidebar;
