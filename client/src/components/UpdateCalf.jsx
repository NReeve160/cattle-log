import React from 'react';

function UpdateCalf() {
  return (
    <div id="update-calf-component">

  <h1 class="title">Update Calf</h1>

  <form action="reports.html">
      {/* <!-- Tag --> */}
      Tag: <input type="text" maxLength={5}/>
      {/* <!-- Birth Date --> */}
      <br />Birth Date: <input type="date" min="2000" max="2026" />
      
      {/* <!-- Calf's Sex --> */}
      <br /><label for="calf_sex">Sex:</label>
      <select id="calf_sex" name="calf_sex">
          <option value="unknown">Unknown</option>
          <option value="heifer">Heifer</option>
          <option value="bull">Bull</option>
      </select>
      
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
      {/* <!-- Keep? --> */}
      <br />Keep Calf? <input type="checkbox"/>
      {/* <!-- Mother (tag) --> */}
      <br />Mother Cow Tag: <input type="text" maxLength={5}/>
      {/* <!-- (optional) Previous Tag --> */}
      <br />Previous Tag: <input type="text" maxLength={5}/>

      {/* <!-- (optional) Vet, shots, sale, death events --> */}
      <br />Vet Visits: <input type="text" readonly/><button><a href="reports.html">+ Add</a></button>
      <br />Shots Given: <input type="text" readonly/><button><a href="reports.html">+ Add</a></button>
      <br />Sold Calf: <input type="text" readonly/><button><a href="reports.html">+ Add</a></button>
      <br />Calf Died: <input type="text" readonly/><button><a href="reports.html">+ Add</a></button>

      {/* <!-- Weaning Date --> */}
      <br />Weaning Date: <input type="date"/>
      
      <br /><br /><button type="submit">SAVE</button>

      <br /><button>DELETE</button>
      
  </form>

  <button>Go Back</button>
  </div>
    
  );
}

export default UpdateCalf;
