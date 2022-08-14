// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'

const columns = [
  { id: 'fullName', label: 'Nama', minWidth: 170 },
  { id: 'employeeID', label: 'Kode Pegawai', minWidth: 100 },
  {
    id: 'jobSkill',
    label: 'Skill Pekerjaan',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'jobType',
    label: 'Jenis Pekerjaa',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'perusahaan',
    label: 'Perusahaan',
    minWidth: 170,
    align: 'right'
  }
]
function createData(fullName, employeeID, jobSkill, jobType, perusahaan) {

  return { fullName, employeeID, jobSkill, jobType, perusahaan }
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263, "Telkom"),
  createData('China', 'CN', 1403500365, 9596961, "Telkom"),
  createData('Italy', 'IT', 60483973, 301340, "Telkom"),
  createData('United States', 'US', 327167434, 9833520, "Telkom"),
  createData('Canada', 'CA', 37602103, 9984670, "Telkom"),
  createData('Australia', 'AU', 25475400, 7692024, "Telkom"),
  createData('Germany', 'DE', 83019200, 357578, "Telkom"),
  createData('Ireland', 'IE', 4857000, 70273, "Telkom"),
  createData('Mexico', 'MX', 126577691, 1972550, "Telkom"),
  createData('Japan', 'JP', 126317000, 377973, "Telkom"),
  createData('France', 'FR', 67022000, 640679, "Telkom"),
  createData('United Kingdom', 'GB', 67545757, 242495, "Telkom"),
  createData('Russia', 'RU', 146793744, 17098246, "Telkom"),
  createData('Nigeria', 'NG', 200962417, 923768, "Telkom"),
  createData('Brazil', 'BR', 210147125, 8515767, "Telkom")
]

const TableStickyHeader = () => {
  // ** States
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(25)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell key={column.id} align={column.align} sx={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
                  {columns.map(column => {
                    const value = row[column.id]

                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default TableStickyHeader
