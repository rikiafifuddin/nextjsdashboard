// ** React Imports
import { useState } from 'react'
import { useRouter } from 'next/router'

// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'

import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { Grid } from '@mui/material'

const columns = [
  { id: 'fullName', label: 'Nama', minWidth: "20%" },
  { id: 'employeeID', label: 'Kode Pegawai', minWidth: "15%" },
  {id: 'jobSkill', label: 'Skill Pekerjaan', minWidth: "15%", align: 'right'},
  {id: 'jobType', label: 'Jenis Pekerjaa', minWidth: "15%", align: 'right'},
  {id: 'perusahaan', label: 'Perusahaan', minWidth: "25%", align: 'right'}
]


const TableStickyHeader = (props) => {
  // ** States
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(25)
  const Router = useRouter()

  const {
    ListEmployee
  } = props

  const data = ListEmployee || [] ;
  const rows = [];

  data.forEach(e => {
    rows.push({
      fullName: e.fullName,
      employeeID: e.employeeID,
      jobSkill: e.jobSkill,
      jobType: e.jobType,
      perusahaan: e.perusahaan
    })
  });

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
              <TableCell key="action" align="center" sx={{ minWidth: "10%" }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role='checkbox' tabIndex={-1} key={row.id}>
                  {columns.map(column => {
                    const value = row[column.id]

                    return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                    )
                  })}

                  <TableCell align='center' key={row.employeeID}>
                    <IconButton
                      id="viewButton"
                      onClick={() => Router.push(`/employee/detail/${row.employeeID}`)}
                      title="Lihat Detail"
                    >
                      <VisibilityIcon />
                    </IconButton>
                    <IconButton
                      id="editButton"
                      onClick={() => Router.push('/employee/edit')}
                      title="Edit"
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      id="deleteButton"
                      onClick={() => Router.push('#')}
                      title="Delete"
                    >
                      <DeleteIcon/>
                    </IconButton>
                    </TableCell>

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
