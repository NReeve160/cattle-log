import React from 'react';
import Sort from './Sort.jsx';
import { Link } from 'react-router-dom';

function BullReport() {
  return (
    <>
    
    <div id="bull-report">
    <Sort />

    <h1 class="title">Bulls</h1>
    <button><Link to="/add-bull">+ Add New</Link></button>

    <table>
        {/* <!-- Top row displaying names of fields --> */}
        <thead>
            <tr class="bold">
                <td>Tag</td>
                <td>Trich Tag</td>
                <td>Brand</td>
                <td>Birth Year</td>
                <td>Color</td>
                <td>Edit</td>
            </tr>
        </thead>

        {/* <!-- Bulls Data --> */}
        <tbody>
            <tr>
                <td>P1</td>
                <td>1234</td>
                <td>JF</td>
                <td>2020</td>
                <td>Black</td>
                <td><button><Link to="/update-bull">➤</Link></button></td>
            </tr>

            <tr>
                <td>A3</td>
                <td>7890</td>
                <td>-B</td>
                <td>2019</td>
                <td>Black</td>
                <td><button><Link to="/update-bull">➤</Link></button></td>
            </tr>


        </tbody>
    </table>
    </div>  
    
    </>

  );
}

export default BullReport;
