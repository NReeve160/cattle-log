import React from 'react';
import { Link } from 'react-router-dom';

function AddCalf() {
  return (
    <div id="add-calf-component">

    <h1 className="title">New Calf</h1>

    <form action="reports.html">
        {/* <!-- Tag --> */}
        Tag: <input type="text" maxLength={5}/>
        {/* <!-- Birth Date --> */}
        <br />Birth Date: <input type="date" min="2000" max="2026" />

        {/* Sex */}
        <br /><label htmlFor="sex">Sex:</label>
        <select id="sex" name="sex">
            <option value="unknown">Unknown</option>
            <option value="bull">Bull</option>
            <option value="heifer">Heifer</option>
        </select>
        
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
        <br />Notes: <input type="text" maxLength={1500}/>

        <br /><br /><button type="submit">SAVE</button>
    </form>
    <button><Link to="/calf-report">View All</Link></button>

    </div>
    
  );
}

export default AddCalf;
