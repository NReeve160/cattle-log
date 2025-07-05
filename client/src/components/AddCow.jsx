import React from 'react';
import { Link } from 'react-router-dom';

function AddCow() {
  return (
    <div id="add-cow-component">

    <h1 className="title">New Cow</h1>

    <form action="reports.html">
        {/* <!-- Tag --> */}
        Tag: <input type="text" maxLength={5}/>
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
        <br />Notes: <input type="text" maxLength={1500}/>

        {/* TODO Connecting to calf table - same animal when it was a calf - this will be complex */}
        {/* Show the Calf Report component and allow to select the entry to connect to (include sort/filters) */}
        {/* optional */}
        <br />My Calf Tag: <input type="text" maxLength={5}/>

        {/* TODO Connecting to calf table - all calves birthed by this cow - this will be complex */}
        {/* Show the Calf Report component and allow to select the entry to connect to (include sort/filters) */}
        {/* optional */}
        <br />My Calves: 
        <ul><button>2017</button></ul>
        <ul><button>2018</button></ul>
        <ul><button>2020</button></ul>
        <ul><button>2021</button></ul>

        <br /><br /><button type="submit">SAVE</button>
    </form>
    <button><Link to="/cow-report">View All</Link></button>

    </div>
  
  );
}

export default AddCow;
