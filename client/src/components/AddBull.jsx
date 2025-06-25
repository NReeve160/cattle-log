import React from 'react';

function AddBull() {
  return (
    <>
    <div id="add-bull-component">

    <p>New Bull</p>

    <form action="reports.html">
        {/* <!-- Tag --> */}
        Tag: <input type="text"/>

        {/* <!-- Trich Tag --> */}
        Trich Tag: <input type="text"/>

        {/* <!-- Brand --> */}
        Brand: <input type="text"/>

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
        
        <button type="submit">SAVE</button>
    </form>
    </div>
    
    </>
  );
}

export default AddBull;
