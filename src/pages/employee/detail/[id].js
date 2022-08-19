import { useRouter } from 'next/router'
import AccountSettings from 'src/pages/employee/detail/employeeDetail'

  export async function getServerSideProps(ctx) {

    const { id } = ctx.query;
    console.log(id);
    const postReq = await fetch('http://localhost:3000/api/employee/detail/'+id);
    const detailEmployee = await postReq.json();

    return {
        props: {
          DetailEmployee: detailEmployee.data
        }
    }
  }

  const EmployeeDetail = (props) => {

    return (
      <AccountSettings
      detailEmployee ={props.DetailEmployee}
      >
      </AccountSettings>
    );

  };

export default EmployeeDetail;
