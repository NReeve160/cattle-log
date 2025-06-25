import React from 'react';

function AddCalf() {
  return (
    <>
    <div id="add-calf-component">

    <p>New Calf</p>

    <form action="reports.html">
        {/* <!-- Tag --> */}
        Tag: <input type="text"/>
        {/* <!-- Birth Date --> */}
        Birth Date: <input type="text" placeholder="MM/DD/YYYY"/>

        {/* Sex */}
        <label htmlFor="sex">Sex:</label>
        <select id="sex" name="sex">
            <option value="unknown">Unknown</option>
            <option value="bull">Bull</option>
            <option value="heifer">Heifer</option>
        </select>
        
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

        <button type="submit">SAVE</button>
    </form>
    </div>
    
    </>
  );
}

export default AddCalf;
