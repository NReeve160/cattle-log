import React from 'react';

const SortYear = ({ value, onChange, years }) => {
    return (
        <div id="sort-year">

        <h2>Sort By Year: </h2>

      <select value={value} onChange={onChange} 
      style={{
        padding: '5px'
      }}>
    <option value="all">All Years</option>
    <option value="2025">2025 (H)</option>
    <option value="2024">2024 (G)</option>
    <option value="2023">2023 (F)</option>
    <option value="2022">2022 (E)</option>
    <option value="2021">2021 (D)</option>
    <option value="2020">2020 (C)</option>
    <option value="2019">2019 (B)</option>
    <option value="2018">2018 (A)</option>
    <option value="2017">2017 (X)</option>
    <option value="2016">2016 (P)</option>
    <option value="2015">2015 (O)</option>
    <option value="2014">2014 (N)</option>
    <option value="2013">2013 (M)</option>
    <option value="2012">2012 (K)</option>
    <option value="2011">2011 (J)</option>
    <option value="2010">2010 (I)</option>
    <option value="2009">2009 (H)</option>
        {/* {years.map((year) => (
          <option key={year} value={year}>{year}</option>
        ))} */}
      </select>

      </div>
    );
  };

export default SortYear;