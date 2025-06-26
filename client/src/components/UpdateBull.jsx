import React from 'react';

function UpdateBull() {
  return (
    <>
    <div id="update-bull-component">

    <h1 class="title">Update Bull</h1>

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

        {/* Add */}
        {/* birth_year	tag	color	previous_calf_id	death_id	sale_id	shot_id	vet_id	notes	2nd tag	2nd brand	purchased_from	purchase_date
year	short text	enum (same as calf)	foreign key	foreign key	foreign key	foreign key	foreign key	text	short text	text	text	date */}

        <button type="submit">SAVE</button>
    </form>
    </div>
    
    </>
  );
}

export default UpdateBull;
