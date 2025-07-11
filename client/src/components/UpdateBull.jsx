import React from 'react';
import { Link } from 'react-router-dom';

function UpdateBull() {
  return (
    <div id="update-bull-component">

    <h1 class="title">Update Bull</h1>

    <form action="reports.html">
        {/* <!-- Tag --> */}
        Tag: <input type="text" maxLength={5}/>

        {/* <!-- Trich Tag --> */}
        <br />Trich Tag: <input type="text" maxLength={5}/>

        {/* <!-- Brand --> */}
        <br />Brand: <input type="text" maxLength={5}/>

        {/* <!-- Birth Year --> */}
        <br />Birth Year: <input type="number" name="year" min="2015" max="2026" step="1" />
        
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
        <br />My Calf Tag: <input type="text" maxLength={5}/>

        {/* <!-- (optional) Previous Tag --> */}
        <br />Previous Tag: <input type="text" maxLength={5}/>

        {/* <!-- (optional) Vet, shots, sale, death events --> */}
        <br />Vet Visits: <input type="text" readonly/><button><Link to="/vet-event">+ Add</Link></button>
        <br />Shots Given: <input type="text" readonly/><button><Link to="/shot-event">+ Add</Link></button>
        <br />Sold Bull: <input type="text" readonly/><button><Link to="/sale-event">+ Add</Link></button>
        <br />Bull Died: <input type="text" readonly/><button><Link to="/death-event">+ Add</Link></button>

        <br />Purchased From: <input type="text" maxLength={200}/>

        <br />Date of Purchase: <input type="date" />

        <br /><br /><button type="submit"><Link to="/bull-report">SAVE</Link></button>

        <br /><button><Link to="/bull-report">DELETE</Link></button>
    </form>

    <button><Link to="/bull-report">View All</Link></button>
    </div>
    
  );
}

export default UpdateBull;
