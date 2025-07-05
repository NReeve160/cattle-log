import React, { useState } from 'react';
import SortYear from './SortYear';
import SortTag from './SortTag';


// TODO: edit this to pull from the correct table through API instead of hard coded data 

// and (Brooklyn:) make the data show up nicely in the table instead of in bullet list 

const data = [
  { name: 'Alice', year: 2021 },
  { name: 'Bob', year: 2022 },
  { name: 'Charlie', year: 2021 },
  { name: 'Diana', year: 2023 },
];

function Sort() {
  const [query, setQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  // Extract unique years from data
  const years = Array.from(new Set(data.map(function(item) {
    return item.year;
  })));

  // Filter data based on name and year
  const filteredData = data.filter(function(item) {
    var matchesName = item.name.toLowerCase().includes(query.toLowerCase());
    var matchesYear = selectedYear === '' || item.year.toString() === selectedYear;
    return matchesName && matchesYear;
  });

  return (
    <div id="sort-component">

      {/* SAMPLE report */}
      <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <div style={{ marginBottom: '1rem' }}>

          {/* search by tag */}
          <SortTag value={query} onChange={function(e) { setQuery(e.target.value); }} />

          {/* sort by year */}
          <SortYear
            value={selectedYear}
            onChange={function(e) { setSelectedYear(e.target.value); }}
            years={years}
          />
        </div>

        <ul>
          {filteredData.length > 0 ? (
            filteredData.map(function(item, idx) {
              return <li key={idx}>{item.name} ({item.year})</li>;
            })
          ) : (
            <p>No results found.</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Sort;