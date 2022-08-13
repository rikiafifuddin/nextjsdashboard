// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'

const navigation = () => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      sectionTitle: 'Admin'
    },
    {
      title: 'Employee',
      icon: AccountPlusOutline,
      path: '/pages/login',
    },
    {
      title: 'Salary',
      icon: CreditCardOutline,
      path: '/cards'
    },
    {
      sectionTitle: 'Pages'
    },
    {
      title: 'Add Employee',
      icon: Login,
      path: '/employee/add',
    },
    {
      title: 'Edit Employee',
      icon: Login,
      path: '/employee/edit',
    }
  ]
}

export default navigation
