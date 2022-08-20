// ** React Imports
import { forwardRef, useState } from 'react'
import * as dayjs from 'dayjs'
import { useRouter } from 'next/router'

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
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

const CustomInput = forwardRef((props, ref) => {
  return <TextField fullWidth {...props} inputRef={ref} label='Birth Date' autoComplete='off' />
})

const CustomInput2 = forwardRef((props, ref) => {
  return <TextField fullWidth {...props} inputRef={ref} label='Join Date' autoComplete='off' />
})

const FormLayoutsSeparator = (props) => {
  // ** States
  const Router = useRouter()
  dayjs().format()
  const data = props.detailEmployee
  const [language, setLanguage] = useState([])
  const [status, setStatus] = useState("normal")
  const [requestStatus, setRequestStatus] = useState(null)

  const [values, setValues] = useState({
    password: '',
    password2: '',
    showPassword: false,
    showPassword2: false
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

  const [paramHeader, setParamHeader] = useState({
    id: data?.id,
    fullName: data?.fullName,
    email: data?.email,
    identityID: data?.identityID,
    employeeID: data?.employeeID,
    perusahaan: data?.perusahaan,
    jobSkill: data?.jobSkill,
    jobType: data?.jobType,
    joinDate: data?.joinDate,
    placeofBirth: data?.placeofBirth,
    birthDate: data?.birthDate,
    gender: data?.gender,
    religion: data?.religion,
    phoneNumber: data?.phoneNumber,
    noRekening:data?.noRekening,
    education: data?.education,
    motherName: data?.motherName,
    streetAddress: data?.streetAddress,
    kelurahanAddress: data?.kelurahanAddress,
    kecamatanAddress: data?.kecamatanAddress,
    kotaAddress: data?.kotaAddress,
    dInsurance: data?.dInsurance,
    bpjsKesehatan: data?.bpjsKesehatan,
    jkkother: data?.jkkother,
    noteinsurance: data?.noteinsurance
  })

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
    console.log("==DATA==", paramHeader);

    const submitReq = await fetch('/api/employee/edit/'+data?.employeeID , {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(paramHeader)
    })

    if(submitReq.status === 200) {
      console.log("success Edit employee");
      setStatus('success')
      setRequestStatus(true);
      Router.push('/employee');
    } else {
      console.log("failed Edit employee");
      setStatus('failed')
      setRequestStatus(false);
    }
  }

  return (
    <Card>
      <CardHeader title='Edit Employee' titleTypographyProps={{ variant: 'h6' }} />
      <Divider sx={{ margin: 0 }} />
      <form onSubmit= {submitHandler.bind(this)}>
        <CardContent>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                1. Employee Detail
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              onChange={fieldHandler.bind(this)}
              fullWidth label='Full Name' name='fullName' defaultValue={data?.fullName} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              onChange={fieldHandler.bind(this)}
              fullWidth type='email' name='email' label='Email'defaultValue={data?.email} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              onChange={fieldHandler.bind(this)}
              fullWidth label='Identity ID' name='identityID' defaultValue={data?.identityID} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              onChange={fieldHandler.bind(this)}
              required fullWidth label='Employee ID' name='employeeID' defaultValue={data?.employeeID} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              onChange={fieldHandler.bind(this)}
              fullWidth label='Company' name='perusahaan' defaultValue={data?.perusahaan} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              onChange={fieldHandler.bind(this)}
              fullWidth label='Job Skill' name='jobSkill' defaultValue={data?.jobSkill} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              onChange={fieldHandler.bind(this)}
              fullWidth label='Job Type' name='jobType' defaultValue={data?.jobType} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={fieldHandler.bind(this)}
                name='joinDate'
                type='date'
                defaultValue={dayjs(data?.joinDate).format('YYYY-MM-DD')}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth label='Tanggal Masuk' />
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
              fullWidth name='placeofBirth' label='Place of Birth' defaultValue={data?.placeofBirth} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={fieldHandler.bind(this)}
                name='birthDate'
                type='date'
                defaultValue={dayjs(data?.birthDate).format('YYYY-MM-DD')}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth label='Tanggal Masuk' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              onChange={fieldHandler.bind(this)}
              fullWidth name='gender' label='Jenis Kelamin' defaultValue={data?.gender} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth name='religion' label='Religion'defaultValue={data?.religion} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              onChange={fieldHandler.bind(this)}
              fullWidth name='phoneNumber' label='Phone No.' defaultValue={data?.phoneNumber} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              onChange={fieldHandler.bind(this)}
              fullWidth name='noRekening' label='Rekening No.' defaultValue={data?.noRekening} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              onChange={fieldHandler.bind(this)}
              name='education' fullWidth label='Education' defaultValue={data?.education} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              onChange={fieldHandler.bind(this)}
              fullWidth name='motherName' label='Nama IBU' defaultValue={data?.motherName} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              onChange={fieldHandler.bind(this)}
              fullWidth name='streetAddress' label='Alamat KTP' defaultValue={data?.streetAddress} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              onChange={fieldHandler.bind(this)}
              fullWidth name='kelurahanAddress' label='Kelurahan KTP' defaultValue={data?.kelurahanAddress} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              onChange={fieldHandler.bind(this)}
              fullWidth name='kecamatanAddress' label='Kecamatan KTP' defaultValue={data?.kecamatanAddress} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              onChange={fieldHandler.bind(this)}
              fullWidth name='kotaAddress' label='Kota KTP' defaultValue={data?.kotaAddress} />
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ marginBottom: 0 }} />
            </Grid>

            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                3. Insurance and Other
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              onChange={fieldHandler.bind(this)}
              fullWidth name='dInsurance' label='D Asuransi' defaultValue={data?.dInsurance} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              onChange={fieldHandler.bind(this)}
              fullWidth name='bpjsKesehatan' label='BPJS Kesehatan' defaultValue={data?.bpjsKesehatan} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              onChange={fieldHandler.bind(this)}
              fullWidth name='jkkother' label='JKK JKM Other' defaultValue={data?.jkkother} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              onChange={fieldHandler.bind(this)}
              fullWidth name='noteinsurance' label='Keterangan Asuransi' defaultValue={data?.noteinsurance} />
            </Grid>

          </Grid>
        </CardContent>
        <Divider sx={{ margin: 0 }} />
        <CardActions>
          <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
            Simpan
          </Button>
          <Button size='large' color='secondary' variant='outlined' onClick={()=> Router.push('/employee')}>
            Batal
          </Button>
        </CardActions>
      </form>
    </Card>
  )
}

export default FormLayoutsSeparator
