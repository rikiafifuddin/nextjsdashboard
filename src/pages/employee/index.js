// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'

// ** Demo Components Imports
import TableStickyHeader from 'src/pages/employee/EmployeeList'

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
  console.log("props:", props);

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='List Pegawai' titleTypographyProps={{ variant: 'h6' }} />
          <TableStickyHeader
            ListEmployee ={props.ListEmployee}
          />
        </Card>
      </Grid>
    </Grid>
  )
}

export default MUITable
