import React from 'react';
import { Link } from 'react-router-dom';

function UpdateCow() {
  return (
    <div id="update-cow-component">

    <h1 class="title">Update Cow</h1>

    <form action="reports.html">
        {/* <!-- Tag --> */}
        Tag: <input type="text" maxLength={5}/>
        {/* <!-- Birth Year --> */}
        <br />Birth Year: <input type="number" name="year" min="2000" max="2026" step="1" />
        
        {/* <!-- Color --> */}
        <br /><label for="color">Color:</label>
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
        <br />My Calf Tag: <input type="text" maxLength={5}/>

        {/* TODO Connecting to calf table - all calves birthed by this cow - this will be complex */}
        {/* Show the Calf Report component and allow to select the entry to connect to (include sort/filters) */}
        <br />My Calves: 
        <ul><button>2017</button></ul>
        <ul><button>2018</button></ul>
        <ul><button>2020</button></ul>
        <ul><button>2021</button></ul>

        {/* <!-- (optional) Previous Tag --> */}
        <br />Previous Tag: <input type="text" maxLength={5}/>

        {/* <!-- (optional) Vet, shots, sale, death events --> */}
        <br />Vet Visits: <input type="text" readonly/><button><a href="reports.html">+ Add</a></button>
        <br />Shots Given: <input type="text" readonly/><button><a href="reports.html">+ Add</a></button>
        <br />Sold Cow: <input type="text" readonly/><button><a href="reports.html">+ Add</a></button>
        <br />Cow Died: <input type="text" readonly/><button><a href="reports.html">+ Add</a></button>

        <br /><br /><button type="submit"><Link to="/cow-report">SAVE</Link></button>

        <br /><button><Link to="/cow-report">DELETE</Link></button>
    </form>

    <button><Link to="/cow-report">View All</Link></button>
    </div>
    
  );
}

export default UpdateCow;
