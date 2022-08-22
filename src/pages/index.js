// ** MUI Imports
import Grid from '@mui/material/Grid'
import { authPage } from '../../middlewares/authorizationPage';
import cookies from 'next-cookies'
import jwt from 'jsonwebtoken'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Trophy from 'src/views/dashboard/Trophy'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import StatisticsCardPotongan from 'src/views/dashboard/StatisticsCardPotongan'

export async function getServerSideProps(ctx) {

  const allCookies = cookies(ctx)
  const status = allCookies.token !== undefined

  if (!status) {
    return {
      redirect: {
        permanent: false,
        destination: `/pages/login`
      }
    }
  } else {
    const token = allCookies.token
    let datacookies

    jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
      if(err) return {};
      datacookies = decoded
    });

    const postReq = await fetch(process.env.HOST_URL+'/api/salarymanagement/detail/'+ datacookies?.employeeID);
    const detailEmployeeSalary = await postReq.json();

    return {
      props:{
        datacookies: detailEmployeeSalary.data
      }
    }

  }
}

const Dashboard = (props) => {

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Trophy
            data={props?.datacookies}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <StatisticsCard
            data={props?.datacookies}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <StatisticsCardPotongan
            data={props?.datacookies}
          />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
