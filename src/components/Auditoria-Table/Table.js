import React, { Component } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import PrintIcon from '@material-ui/icons/Print';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import axios from '../../bd/client.js'
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
/**estilo para a cada celula da tabela */
const StyledTableCell = withStyles((theme) => ({
  head: {
    border: 0,
    padding: 0,

    fontWeight: 'bold',
    fontSize: 14
  },
  /*Estilo para as células do tableBody */
  body: {
    borderTop: '1px solid #E8E8E8',
    borderBottom: '1px solid #E8E8E8',
    height: 20,
    padding: 0,
    fontSize: 14,
    /**Aplica as bordas arredondadas para as pontas da linha */
    '&:first-child': {
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
      paddingLeft: 10,
      borderLeft: '2px solid #E8E8E8',
    },
    '&:last-child': {
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
      borderRight: '2px solid #E8E8E8',
    },
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    border: 0,
    marginTop: 10,
    '&:nth-of-type(odd)': {
      backgroundColor: '#E8E8E8',
    },
    '&:hover': {
      backgroundColor: '#BEE3E8'
    },
  },
}))(TableRow);

/*retorna um objeto contendo os campos de cada coluna */
function createData(modelo, setor, status, criado) {
  return { modelo, setor, status, criado };
}


const useStyles = themes => ({
  table: {
    minWidth: 700,
    border: 0,
    borderCollapse: 'separate',
    borderSpacing: '0 10px'
  },
  modelo: {
    alignItems: 'center',
    display: 'flex'
  },
  btn: {
    marginRight: 15
  }
});


class TableAuditoria extends Component {
  state = {
    form: [],
    page:0,
    rowsPerPage:5,
    
  }

  componentDidMount() {
    axios.get("/forms")
      .then(response => {
        this.setState({ form: response.data })
      })
    this.setState({emptyRows: this.state.rowsPerPage - 
      Math.min(this.state.rowsPerPage, this.state.form.length - this.state.page * this.state.rowsPerPage)})
  }
  handleChangePage = (event, nPage) => {
    console.log(nPage)
    this.setState({page:nPage});
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({rowsPerPage:parseInt(event.target.value, 10)})
    this.setState({page:0})
  };

  render() {
    const { classes } = this.props;
    var elementsTable = [];
    const data = new Date();
    var rows = [...this.state.form]
    
    if(this.state.rowsPerPage > 0){
      rows = rows.slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage)
    }
    
    elementsTable.push(
      rows.map((row,i) => (
      <StyledTableRow key={i}>
        {console.log(row.titulo)}
        <StyledTableCell align="left" >
          <div className={classes.modelo}>
            <IconButton><InsertDriveFileIcon style={{ color: "#6e7573" }} /></IconButton>
            {row.titulo}
          </div>
        </StyledTableCell>
        <StyledTableCell style={{ width: '20%' }} align="left">Administrativo</StyledTableCell>
        <StyledTableCell style={{ width: '10%' }} align="left">Ativo</StyledTableCell>
        <StyledTableCell style={{ width: '10%' }} align="left">{data.getDay() + '/' + data.getMonth() + '/' + data.getFullYear()}</StyledTableCell>
        <StyledTableCell style={{ width: '25%', minWidth: 200 }} align="center">{createActions(classes,row.id)}</StyledTableCell>
      </StyledTableRow>

    ))
    )
    console.log(elementsTable)
    return (
      <TableContainer>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              {/*Head da tabela */}
              <StyledTableCell align="left">Modelo</StyledTableCell>
              <StyledTableCell style={{ width: '20%' }} align="left">Setor</StyledTableCell>
              <StyledTableCell style={{ width: '10%' }} align="left">Status</StyledTableCell>
              <StyledTableCell style={{ width: '10%' }} align="left">Criado</StyledTableCell>

            </TableRow>
          </TableHead>

          <TableBody>
            {/*Percorre o array "rows" e adiciona cada elemento na tabela */}
            {console.log(elementsTable)}
            {elementsTable}

          </TableBody>
          <TableFooter>
          <TableRow style={{width:'100%'}}>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              labelRowsPerPage = 'linhas por página: '
              labelDisplayedRows={({ from, to, count }) => `${from}-${to} de ${count}`}
              count={this.state.form.length}
              rowsPerPage={this.state.rowsPerPage}
              page={this.state.page}
              SelectProps={{
                inputProps: { 'aria-label': 'linhas por página' },
                native: true,
              }}
              onChangePage={this.handleChangePage}
              onChangeRowsPerPage={this.handleChangeRowsPerPage}
              
            />
          </TableRow>
        </TableFooter>
        </Table>
      </TableContainer>
    )
  }
}
{/* função para criar os botões da coluna "ações" */ }
function createActions(classes,id) {

  return (
    <div>
      <IconButton className={classes.btn} size="small" title="Editar">
        <EditIcon style={{ color: "#6e7573" }} />
      </IconButton>
      <Link to={
  {pathname: '/formResp',
  state: { id: id }}
}><IconButton className={classes.btn} size="small" title="Visualizar">
        <VisibilityIcon style={{ color: "#6e7573" }} />
      </IconButton></Link>
      <IconButton className={classes.btn} size="small" title="Copiar">
        <FileCopyIcon style={{ color: "#6e7573" }} />
      </IconButton>
      <IconButton className={classes.btn} size="small" title="Imprimir">
        <PrintIcon style={{ color: "#6e7573" }} />
      </IconButton>
    </div>
  )
}

export default withStyles(useStyles)(TableAuditoria)
