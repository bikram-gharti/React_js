import React from 'react';
import UserCard from './components/UserCard';
import { Container } from '@mui/material';

function App() {
  return (
    <>
      <Container maxWidth="xs" sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', }}>
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </Container>
    </>
  );
}

export default App;
