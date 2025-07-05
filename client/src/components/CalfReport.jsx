import React from 'react';
import Sort from './Sort.jsx';
import { Link } from 'react-router-dom';

function CalfReport() {
  return (
    <>
    
    <div id="calf-report">
    <Sort />

    <h1 class="title">Calves</h1>
    <button><Link to="/add-calf">+ Add New</Link></button>

    <table>
        {/* <!-- Top row displaying names of fields --> */}
        <thead>
            <tr class="bold">
                <td>Tag</td>
                <td>Birth Date</td>
                <td>Sex</td>
                <td>Color</td>
                <td>Edit</td>
            </tr>
        </thead>

        {/* <!-- Calves Data --> */}
        <tbody>
            <tr>
                <td>P1</td>
                <td>01/10/2025</td>
                <td>Bull</td>
                <td>Black</td>
                <td><button><a href="update.html">➤</a></button></td>
            </tr>

            <tr>
                <td>A3</td>
                <td>02/03/2025</td>
                <td>Heifer</td>
                <td>Red</td>
                <td><button><a href="update.html">➤</a></button></td>
            </tr>


        </tbody>
    </table>
    </div>  
    
    </>

  );
}

export default CalfReport;
