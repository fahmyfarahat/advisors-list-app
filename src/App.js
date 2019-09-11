import React, { Fragment, useState } from 'react';
import Container from '@material-ui/core/Container';
import TableListView from "./components/TableView/TableListView";
import HeaderLayout from "./components/Layouts/HeaderLayout";
import {useStyles} from "./styles";

function App() {
  const [advisorData, setAdvisorData] = useState([]);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

  const fetchAdvisors = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/advisors', { accept: "application/json" })
      const data = await response.json();
      setAdvisorData([...data]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("Error", error);
    }
  };

  React.useEffect(() => {
    fetchAdvisors()
  }, []);
  return (
    <Fragment>
      <HeaderLayout />
      <Container className={classes.root}>
        <TableListView loading={loading} advisorData={advisorData} classes={classes} />
      </Container>
    </Fragment>
  );
}

export default App;
