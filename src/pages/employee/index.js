// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import Stack from '@mui/material/Stack';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useRouter } from 'next/router'

// ** Demo Components Imports
import TableStickyHeader from 'src/pages/employee/EmployeeList'
import { Button } from '@mui/material'

export async function getServerSideProps(ctx) {

  const postReq = await fetch('http://localhost:3000/api/employee/getAllEmployee');
  const ListEmployee = await postReq.json();

  return {
      props: {
          ListEmployee: ListEmployee.data
      }
  }
}

const MUITable = (props) => {
  const Router = useRouter()
  console.log("props:", props);

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


          <TableStickyHeader
            ListEmployee ={props.ListEmployee}
          />
        </Card>
      </Grid>
    </Grid>
  )
}

export default MUITable
