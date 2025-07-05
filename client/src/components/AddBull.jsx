import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function AddBull() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
    // Navigate to reports page after successful submission
    navigate('/reports');
  };

  return (
    <div id="add-bull-component">

    <h1 className="title">New Bull</h1>

    <form onSubmit={handleSubmit}>
        {/* <!-- Tag --> */}
        Tag: <input type="text"/>

        {/* <!-- Trich Tag --> */}
        <br />Trich Tag: <input type="text"/>

        {/* <!-- Brand --> */}
        <br />Brand: <input type="text"/>

        {/* <!-- Birth Year --> */}
        <br />Birth Year: <input type="number" name="year" min="2000" max="2026" step="1" />
        
        {/* <!-- Color --> */}
        <br /><label htmlFor="color">Color:</label>
        <select id="color" name="color">
            <option value="black">Black</option>
            <option value="brown">Brown</option>
            <option value="bwf">Black White Face</option>
            <option value="brockle">Brockle</option>
            <option value="red">Red</option>
            <option value="gray">Gray</option>
        </select>
        
        {/* <!-- Notes --> */}
        <br />Notes: <input type="text" />
        
        <br /><br /><button type="submit">SAVE</button>
    </form>
    <button><Link to="/bull-report">View All</Link></button>
    
    </div>
    
  );
}

export default AddBull;
