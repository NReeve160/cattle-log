import React, { useEffect, useState } from 'react';
import Sort from './Sort.jsx';
import { Link } from 'react-router-dom';

function CowReport() {
  const [cows, setCows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCows() {
      try {
        const res = await fetch('http://localhost:3000/api/cows');
        if (!res.ok) throw new Error(`Error fetching cows: ${res.statusText}`);

        const data = await res.json();
        setCows(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCows();
  }, []);

  if (loading) return <p>Loading cows...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div id="cows-report">
      <Sort />

      <h1 className="title">Cows</h1>
      <button><Link to="/add-cow">+ Add New</Link></button>

      <table>
        <thead>
          <tr className="bold">
            <td>Tag</td>
            <td>Birth Year</td>
            <td>Color</td>
            <td>Edit</td>
          </tr>
        </thead>

        <tbody>
          {cows.length === 0 ? (
            <tr>
              <td colSpan="4">No cows found.</td>
            </tr>
          ) : (
            cows.map(cow => (
              <tr key={cow._id}>
                <td>{cow.tag}</td>
                <td>{cow.birthYear}</td>
                <td>{cow.color}</td>
                <td>
                  <button><Link to={`/update-cow/${cow._id}`}>➤</Link></button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CowReport;
