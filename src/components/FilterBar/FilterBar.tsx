import React from 'react';

const FilterBar = () => {
  const filters = ['All', 'Completed'];

  return (
    <div className='filter-panel'>
      <h2 className='filter-title'>Filter Options</h2>
      <div className='filter-options'>
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-button 
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
