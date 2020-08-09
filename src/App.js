import React, { useState } from 'react';
import {Container} from 'react-bootstrap'
import useFetchJobs from './useFetchJobs'
import JobsPagination from './JobsPagination'
import SearchForm from './SearchForm'
import Job from './Job'
import './App.css';
import { ThemeProvider } from '@material-ui/styles';
import CircularProgress from "@material-ui/core/CircularProgress";
import { Alert, AlertTitle } from '@material-ui/lab';
import { createMuiTheme } from '@material-ui/core/styles';



const theme = createMuiTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: '#50d890',
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#50d890',
      },
    },
  });



function App() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page)

  function handleParamChange(e) {
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setParams(prevParams => {
      return { ...prevParams, [param]: value }
    })
  }

  return (
    <div>
     <div className="hero">
    <h1 className="text-style text-center">TECH JOBS <span className="github">by GitHub  <i className="fab fa-github xs"></i> </span></h1>
    <div className="form-container">
    <div className="form-style">
    <SearchForm params={params} onParamChange={handleParamChange} />
    </div>
    </div>
   </div>
    <div className="conatiner-design">
    <Container className="my-auto col-md-6 col-md-offset-3">
    {loading === false && <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />}
    <ThemeProvider theme={theme}>
    <div style={{position: 'relative'}}>
    {loading && <CircularProgress size='4rem' color="secondary" left={-20} top={10} status={'loading'} style={{marginLeft: '50%'}}/>}
    </div>
    {error && <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        We are having some difficulty getting the data — <strong>Please refresh!</strong>
      </Alert>}
    {jobs.map(job => {
      return <Job key={job.id} job={job} />
    })}
    </ThemeProvider>

    {loading ===false && <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />}
  </Container>
  </div>
  
  </div>
  );
}

export default App;
