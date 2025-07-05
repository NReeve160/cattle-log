import React from 'react';
import { Link } from 'react-router-dom';

function ShotEvent() {
  return (
    <div id="shot-event-component">

    <h1 className="title">Add A Shot</h1>

    <form action="reports.html">
        {/* TODO: Show actual Tag and birth date/year (using id of the animal, passed through the link) */}
        Tag: <input type="text" maxLength={5}/>
        {/* <!-- Birth Date --> */}
        <br />Birth Date: <input type="date" min="2000" max="2026" />
        {/* <!-- Birth Year --> */}
        <br />Birth Year: <input type="number" name="year" min="2000" max="2026" step="1" />
        
        <br />
        {/* Enter new information */}
        <br />Date Shot Was Given: <input type="date" min="2000" max="2026" />
        <br />Name of Shot: <input type="text" maxLength={300}/>
        <br />Dosage: <input type="text" maxLength={100}/>
        <br />Notes: <input type="text" maxLength={1500} />
        
        {/* TODO: these links should be dynamic, routing to the update-cow page if it's a cow, etc. */}
        <br /><br /><button type="submit"><Link to="/update-cow">SAVE</Link></button>
    </form>

    {/* TODO: this link should route back to the update-cow, update-calf, or update-bull page, using the same id passed from the link above */}
    <button><Link to="/update-cow">View Animal</Link></button>

    </div>
  
  );
}

export default ShotEvent;
