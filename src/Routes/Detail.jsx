import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Style from '../Styles/Detail.module.css';

const Detail = () => {
  const [error, setError] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const data = await response.json();
        setTimeout(() => {
          setUser(data);
          setLoading(false);
        }, 2000);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, [params.id]);

  if (error) return <p>Error: {error}</p>;

  return (
    <div className={Style.container}>
      <h1>Detail Dentist ID: {params.id}</h1>
      {loading ? (
        <p>Loading user information...</p>
      ) : user ? (
        <table className={Style.table}>
          <thead>
            <tr>
              <th>Field</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Name</strong></td>
              <td>{user.name}</td>
            </tr>
            <tr>
              <td><strong>Email</strong></td>
              <td>{user.email}</td>
            </tr>
            <tr>
              <td><strong>Phone</strong></td>
              <td>{user.phone}</td>
            </tr>
            <tr>
              <td><strong>Website</strong></td>
              <td>
                <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">
                  {user.website}
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>No user data found.</p>
      )}
    </div>
  );
};

export default Detail;
