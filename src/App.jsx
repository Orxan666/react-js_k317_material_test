import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([])
  const [name, setName] = useState("Ayxan")
  // const loadData = () => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then(x => x.json()).then(x => setUsers(x))2
  // }

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(x => x.json()).then(x => setUsers(x))
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div className="App">
      {/* <button onClick={() => loadData()}>Load data</button> */}
      {
        users.map(user => (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            
            {
              <p>{user.address.street}</p>
            }
            <hr />
          </div>
        ))
      }
    </div>
  );
}

export default App;
