import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=66")
      .then(res => res.json())
      .then(data => {
        setUsers(data.results);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load users");
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{textAlign:"center"}}>Loading...</p>;
  if (error) return <p style={{textAlign:"center"}}>{error}</p>;

  return (
    <div style={{padding:"20px"}}>
      <h1 style={{textAlign:"center"}}>Random Users Application | Tericsoft Assessment</h1>

    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(7, 1fr)",
      gap: "25px"
    }}>
        {users.map((user, index) => (
          <div key={index} style={{
            border:"3px solid #ddd",
            padding:"15px",
            textAlign:"center",
            borderRadius:"10px"
          }}>
            <img 
              src={user.picture.medium} 
              alt="user"
              style={{borderRadius:"50%"}}
            />
            <h4>{user.name.first} {user.name.last}</h4>
            <p>{user.location.country}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;