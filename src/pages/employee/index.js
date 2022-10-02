import * as React from 'react';
// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Stack from '@mui/material/Stack';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useRouter } from 'next/router'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';

// ** Demo Components Imports
import TableStickyHeaderEmployeeList from 'src/pages/employee/employeeList'
import { Button } from '@mui/material'

export async function getServerSideProps(ctx) {

  const postReq = await fetch(process.env.HOST_URL+'/api/employee/getAllEmployee');
  const ListEmployee = await postReq.json();

  return {
      props: {
          ListEmployee: ListEmployee.data
      }
  }
}


const MUITable = (props) => {
  const Router = useRouter()
  const [name, setName] = React.useState();
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const options = ['Telkom Indonesia', 'Option 2'];

  const [value, setValue] = React.useState();
  const [inputValue, setInputValue] = React.useState('');

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>

        <Card>
          <Stack direction="row" display="flex" justifyContent="space-between">
            <CardHeader title='List Pegawai' titleTypographyProps={{ variant: 'h6' }} />
            <Button onClick={() => Router.push('/employee/add')} startIcon={<AddCircleOutlineIcon />}>
              Tambah
            </Button>
          </Stack>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Search</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Stack
              direction="row"
              spacing={2}
            >
              <TextField
                id="outlined-name"
                label="Nama / Kode Pegawai"
                value={name}
                onChange={handleChange}
              />
              <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  setInputValue(newInputValue);
                }}
                id="controllable-states-demo"
                options={options}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Perusahaan" />}
              />
              <Button variant="contained" endIcon={<SearchIcon />}>
                Search
              </Button>
            </Stack>
            </AccordionDetails>
          </Accordion>


          <TableStickyHeaderEmployeeList
            ListEmployee ={props.ListEmployee}
          />
        </Card>
      </Grid>
    </Grid>
  )
}

export default MUITable
