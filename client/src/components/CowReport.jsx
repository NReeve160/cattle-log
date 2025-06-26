import React from 'react';
import Sort from './Sort.jsx';

function CowReport() {
  return (
    <>

    <div id="cows-report">
    <Sort />

    <h1 class="title">Cows</h1>
    <button><a href="addcow.html">+ Add New</a></button>

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
                <td><button><a href="update.html">➤</a></button></td>
            </tr>

            <tr>
                <td>A3</td>
                <td>2025</td>
                <td>Red</td>
                <td><button><a href="update.html">➤</a></button></td>
            </tr>


        </tbody>
    </table>
    </div>  
    
    </>

  );
}

export default CowReport;
