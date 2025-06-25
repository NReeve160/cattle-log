import React from 'react';

function AddCow() {
  return (
    <>
    <div id="add-cow-component">

    <p>New Cow</p>

    <form action="reports.html">
        {/* <!-- Tag --> */}
        Tag: <input type="text"/>
        {/* <!-- Birth Year --> */}
        Birth Year: <input type="text" placeholder="YYYY"/>
        
        {/* <!-- Color --> */}
        <label for="color">Color:</label>
        <select id="color" name="color">
            <option value="black">Black</option>
            <option value="brown">Brown</option>
            <option value="bwf">Black White Face</option>
            <option value="brockle">Brockle</option>
            <option value="red">Red</option>
            <option value="gray">Gray</option>
        </select>
        
        {/* <!-- Notes --> */}
        Notes: <input type="text" value=""/>

        {/* TODO Connecting to calf table - same animal when it was a calf - this will be complex */}
        My Calf Tag: <input type="text" value=""/>

        {/* TODO Connecting to calf table - all calves birthed by this cow - this will be complex */}
        My Calves: 
        <ul><button>2017</button></ul>
        <ul><button>2018</button></ul>
        <ul><button>2020</button></ul>
        <ul><button>2021</button></ul>

        {/* <!-- (optional) Previous Tag --> */}
        Previous Tag: <input type="text"/>

        {/* <!-- (optional) Vet, shots, sale, death events --> */}
        Vet Visits: <input type="text" value="None" readonly/><button><a href="reports.html">+ Add</a></button>
        Shots Given: <input type="text" value="None" readonly/><button><a href="reports.html">+ Add</a></button>
        Sold Cow: <input type="text" value="N/A" readonly/><button><a href="reports.html">+ Add</a></button>
        Cow Died: <input type="text" value="N/A" readonly/><button><a href="reports.html">+ Add</a></button>

        <button type="submit">SAVE</button>
    </form>
    </div>
    
    </>
  );
}

export default AddCow;
