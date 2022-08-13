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

const FormLayoutsSeparator = () => {
  // ** States
  const [language, setLanguage] = useState([])
  const [date, setDate] = useState(null)

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

  return (
    <Card>
      <CardHeader title='Add Employee' titleTypographyProps={{ variant: 'h6' }} />
      <Divider sx={{ margin: 0 }} />
      <form onSubmit={e => e.preventDefault()}>
        <CardContent>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                1. Employee Detail
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Full Name' placeholder='Abby Setyo Wiratama' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth type='email' label='Email' placeholder='abbys@gmail.com' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Identity ID' placeholder='3524150659800001' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField required fullWidth label='Employee ID' placeholder='2666378615' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField  fullWidth label='Company' placeholder='Telkom' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField  fullWidth label='Job Skill' placeholder='General Manger' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField  fullWidth label='Job Type' placeholder='Common' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DatePicker
                selected={date}
                showYearDropdown
                showMonthDropdown
                placeholderText='MM-DD-YYYY'
                customInput={<CustomInput2 />}
                id='form-joinDate-separator-date'
                onChange={date => setDate(date)}
              />
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
              <TextField fullWidth label='Place of Birth' placeholder='Jakarta' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DatePicker
                selected={date}
                showYearDropdown
                showMonthDropdown
                placeholderText='MM-DD-YYYY'
                customInput={<CustomInput />}
                id='form-layouts-separator-date'
                onChange={date => setDate(date)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label'>Gender</InputLabel>
                <Select
                  label='Gender'
                  defaultValue=''
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                >
                  <MenuItem value='L'>Laki- Laki</MenuItem>
                  <MenuItem value='P'>Perempuan</MenuItem>
                  <MenuItem value='O'>Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Religion' placeholder='Islam' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Phone No.' placeholder='+1-123-456-8790' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Rekening No.' placeholder='1234568790' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Education' placeholder='SMP' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Mother Name' placeholder='SMP' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Street Address' placeholder='Jl. Dalam Belakang' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Kelurahan Address' placeholder='Payaman' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Kota Address' placeholder='Lamongan' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Kota Address' placeholder='Lamongan' />
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
              <TextField fullWidth label='D Asuransi' placeholder='072201740' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='BPJS Kesehatan' placeholder='0000452600144' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='JKK JKM Other' placeholder='-' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Keterangan Asuransi' placeholder='PBI (APBN) / OK Edabu 05-07-2022' />
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
