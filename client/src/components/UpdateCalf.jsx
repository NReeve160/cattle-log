import React from 'react';

function UpdateCalf() {
  return (
    <>
    <div id="update-component">

  <p>Update Calf</p>

  <form action="reports.html">
      {/* <!-- Tag --> */}
      Tag: <input type="text" value="A3"/>
      {/* <!-- Birth Date --> */}
      Birth Date: <input type="text" value="01/12/2025"/>
      
      {/* <!-- Calf's Sex --> */}
      <label for="calf_sex">Sex:</label>
      <select id="calf_sex" name="calf_sex">
          <option value="unknown">Unknown</option>
          <option value="heifer">Heifer</option>
          <option value="bull">Bull</option>
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
      {/* <!-- Keep? --> */}
      Keep Calf? <input type="checkbox"/>
      {/* <!-- Mother (tag) --> */}
      Mother Cow Tag: <input type="text" value="B10"/>
      {/* <!-- (optional) Previous Tag --> */}
      Previous Tag: <input type="text" value="None"/>

      {/* <!-- (optional) Vet, shots, sale, death events --> */}
      Vet Visits: <input type="text" value="None" readonly/><button><a href="reports.html">+ Add</a></button>
      Shots Given: <input type="text" value="None" readonly/><button><a href="reports.html">+ Add</a></button>
      Sold Calf: <input type="text" value="N/A" readonly/><button><a href="reports.html">+ Add</a></button>
      Calf Died: <input type="text" value="N/A" readonly/><button><a href="reports.html">+ Add</a></button>

      {/* <!-- Weaning Date --> */}
      Weaning Date: <input type="text" placeholder="MM/DD/YYYY"/>
      
      <button type="submit">SAVE</button>

      <button>DELETE</button>
      
  </form>
  </div>
    
    </>
  );
}

export default UpdateCalf;
