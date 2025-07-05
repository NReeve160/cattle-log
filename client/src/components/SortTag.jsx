import React from 'react';

const SortTag = ({ value, onChange }) => {
    return (
        <div id="sort-tag">

        <h2>Search By Tag: </h2>
      <input type="text" placeholder="A1" value={value} onChange={onChange}
        style={{
          padding: '5px 10px',
          border: '1px solid black',
          width: '50px'
        }}
      />
      
      </div>
    );
  };

export default SortTag;