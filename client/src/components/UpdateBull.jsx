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
        <br />Vet Visits: <input type="text" readonly/><button><a href="reports.html">+ Add</a></button>
        <br />Shots Given: <input type="text" readonly/><button><a href="reports.html">+ Add</a></button>
        <br />Sold Bull: <input type="text" readonly/><button><a href="reports.html">+ Add</a></button>
        <br />Bull Died: <input type="text" readonly/><button><a href="reports.html">+ Add</a></button>

        <br />Purchased From: <input type="text" maxLength={200}/>

        <br />Date of Purchase: <input type="date" />

        <br /><br /><button type="submit">SAVE</button>

        <br /><button>DELETE</button>
    </form>

    <button>Go Back</button>
    </div>
    
  );
}

export default UpdateBull;
