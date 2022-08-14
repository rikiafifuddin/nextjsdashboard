// ** React Imports
import { forwardRef, useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import Select from '@mui/material/Select'

// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'
import { Router } from 'mdi-material-ui'

const CustomInput = forwardRef((props, ref) => {
  return <TextField name='birthDate' fullWidth {...props} inputRef={ref} label='Tanggal lahir' autoComplete='off' />
})

const CustomInput2 = forwardRef((props, ref) => {
  return <TextField name='joinDate' fullWidth {...props} inputRef={ref} label='Tanggal Masuk' autoComplete='off' />
})

const FormLayoutsSeparator = () => {
  // ** States
  const [language, setLanguage] = useState([])
  const [date, setDate] = useState(null)
  const [date2, setDate2] = useState(null)
  const [status, setStatus] = useState("normal")
  const [requestStatus, setRequestStatus] = useState(null)

  // const [values, setValues] = useState({
  //   password: '',
  //   password2: '',
  //   showPassword: false,
  //   showPassword2: false
  // })

  const [paramHeader, setParamHeader] = useState({
    fullName: '',
    email: '',
    identityID: '',
    employeeID: '',
    perusahaan: '',
    jobSkill: '',
    jobType: '',
    joinDate: '',
    placeofBirth: '',
    birthDate: '',
    gender: '',
    religion: '',
    phoneNumber: '',
    noRekening:'',
    education: '',
    motherName: '',
    streetAddress: '',
    kelurahanAddress: '',
    kecamatanAddress: '',
    kotaAddress: '',
    dInsurance: '',
    bpjsKesehatan: '',
    jkkother: '',
    noteinsurance: ''
  })

  // Handle Password
  const handlePasswordChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  // Handle Confirm Password
  const handleConfirmChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowConfirmPassword = () => {
    setValues({ ...values, showPassword2: !values.showPassword2 })
  }

  const handleMouseDownConfirmPassword = event => {
    event.preventDefault()
  }

  // Handle Select
  const handleSelectChange = event => {
    setLanguage(event.target.value)
  }

  const [value, setValue] = useState(
    new Date('2014-08-18T21:11:54'),
  );

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  function fieldHandler(e) {
    const name = e.target.getAttribute('name')
    
    setParamHeader({
      ...paramHeader,
      [name]: e.target.value
    })
  }

  async function submitHandler(e) {
    e.preventDefault()

    setStatus('loading')

    const sumbitReq = await fetch('/api/employee/addEmployee', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(paramHeader)
    })

    if(sumbitReq.status === 200) {
      setRequestStatus(true)
      Router.push('/employee')
    } else {
      setRequestStatus(false)
    }
    
  }

  return (
    <Card>
      <CardHeader title='Tambah Pekerja' titleTypographyProps={{ variant: 'h6' }} />
      <Divider sx={{ margin: 0 }} />
      <form onSubmit={submitHandler.bind(this)}>
        <CardContent>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                1. Karyawan Detail
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              onChange={fieldHandler.bind(this)}
              name='fullName'
              fullWidth label='Nama Lengkap' placeholder='Abby Setyo Wiratama' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              onChange={fieldHandler.bind(this)}
              name='email'
              fullWidth type='email' label='Email' placeholder='abbys@gmail.com' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              onChange={fieldHandler.bind(this)}
              name='identityID'
              fullWidth label='Nomer KTP' placeholder='3524150659800001' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              onChange={fieldHandler.bind(this)}
              name='employeeID'
              required fullWidth label='Nomor Pekerja' placeholder='2666378615' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              onChange={fieldHandler.bind(this)}
              name='perusahaan'
              fullWidth label='Perusahaan' placeholder='Telkom' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              onChange={fieldHandler.bind(this)}
              name='jobSkill'
              fullWidth label='Skill Pekerjaan' placeholder='General Manger' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              onChange={fieldHandler.bind(this)}
              name='jobType'
              fullWidth label='Jenis Pekerjaan' placeholder='Common' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={fieldHandler.bind(this)}
                name='joinDate'
                type='date'
                defaultValue="2017-05-24"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth label='Tanggal Masuk' placeholder='Common' />
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ marginBottom: 0 }} />
            </Grid>

            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                2. Personal Info
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
              onChange={fieldHandler.bind(this)}
              name='placeofBirth'
              fullWidth label='Tempat Lahir' placeholder='Jakarta' />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                onChange={fieldHandler.bind(this)}
                name='birthDate'
                type='date'
                defaultValue="2017-05-24"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth label='Tanggal Lahir' placeholder='Common' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
              onChange={fieldHandler.bind(this)}
              name='gender'
              fullWidth label='Jenis Kelamin' placeholder='Perempuan' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
              onChange={fieldHandler.bind(this)}
              name='religion'
              fullWidth label='Agama' placeholder='Islam' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
              onChange={fieldHandler.bind(this)}
              name='phoneNumber'
              fullWidth label='Nomer HP' placeholder='+1-123-456-8790' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
              onChange={fieldHandler.bind(this)}
              name='noRekening'
              fullWidth label='Nomer Rekening' placeholder='1234568790' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
              onChange={fieldHandler.bind(this)}
              name='education'
              fullWidth label='Pendidikan' placeholder='SMP' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
              onChange={fieldHandler.bind(this)}
              name='motherName'
              fullWidth label='Nama Ibu' placeholder='SMP' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
              onChange={fieldHandler.bind(this)}
              name='streetAddress'
              fullWidth label='Alamat (KTP)' placeholder='Jl. Dalam Belakang' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
              onChange={fieldHandler.bind(this)}
              name='kelurahanAddress'
              fullWidth label='Kelurahan (KTP)' placeholder='Payaman' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
              onChange={fieldHandler.bind(this)}
              name='kecamatanAddress'
              fullWidth label='Kecamatan (KTP)' placeholder='Lamongan' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
              onChange={fieldHandler.bind(this)}
              name='kotaAddress'
              fullWidth label='Kota (KTP)' placeholder='Lamongan' />
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ marginBottom: 0 }} />
            </Grid>

            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                3. Asuransi
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
              onChange={fieldHandler.bind(this)}
              name='dInsurance'
              fullWidth label='D Asuransi' placeholder='072201740' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
              onChange={fieldHandler.bind(this)}
              name='bpjsKesehatan'
              fullWidth label='BPJS Kesehatan' placeholder='0000452600144' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
              onChange={fieldHandler.bind(this)}
              name='jkkother'
              fullWidth label='JKK JKM dll' placeholder='-' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
              onChange={fieldHandler.bind(this)}
              name='noteinsurance'
              fullWidth label='Keterangan Asuransi' placeholder='PBI (APBN) / OK Edabu 05-07-2022' />
            </Grid>

          </Grid>
        </CardContent>
        <Divider sx={{ margin: 0 }} />
        <CardActions>
          <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
            Submit
          </Button>
          <Button size='large' color='secondary' variant='outlined'>
            Cancel
          </Button>
        </CardActions>
      </form>
    </Card>
  )
}

export default FormLayoutsSeparator
