import { useEffect, useState } from "react";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  // color: theme.palette.text.secondary,
}));
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
      <Grid container spacing={3}>
      {
        users.map(user => (
          <Grid xs={4} key={user.id}>
            <Item>
                <h1>{user.name}</h1>
                <p>{user.email}</p>
                
                {
                  <p>{user.address.street}</p>
                }
            </Item>
          </Grid>
          
        ))
      }
      </Grid>
    </div>
  );
}

export default App;
