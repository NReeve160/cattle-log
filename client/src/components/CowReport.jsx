import React from 'react';
import Sort from './Sort.jsx';
import { Link } from 'react-router-dom';

function CowReport() {
  return (
    <>

    <div id="cows-report">
    <Sort />

    <h1 className="title">Cows</h1>
    <button><Link to="/add-cow">+ Add New</Link></button>

    <table>
        {/* <!-- Top row displaying names of fields --> */}
        <thead>
            <tr class="bold">
                <td>Tag</td>
                <td>Birth Year</td>
                <td>Color</td>
                <td>Edit</td>
            </tr>
        </thead>

        {/* <!-- Cows Data --> */}
        <tbody>
            <tr>
                <td>P1</td>
                <td>2025</td>
                <td>Black</td>
                <td><button><Link to="/update-cow">➤</Link></button></td>
            </tr>

            <tr>
                <td>A3</td>
                <td>2025</td>
                <td>Red</td>
                <td><button><Link to="/update-cow">➤</Link></button></td>
            </tr>


        </tbody>
    </table>
    </div>  
    
    </>

  );
}

export default CowReport;
