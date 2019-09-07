import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import EnhancedTable from "./components/EnhancedTable";
import Header from "./components/Header";

function App() {

  return (
    <div>
      <Header/>
      <Container >
        <EnhancedTable />
      </Container>
    </div>
  );
}

export default App;
