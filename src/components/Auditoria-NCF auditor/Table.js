import React, { Component } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CancelIcon from '@material-ui/icons/Cancel';
import PrintIcon from '@material-ui/icons/Print';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import AssignmentIcon from '@material-ui/icons/Assignment';
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
    height: 48,
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
function createData(nome, setor, status, classes) {
  const data = new Date()
  return (
    <StyledTableRow>
      <StyledTableCell style={{ width: '20%' }} align="left">{nome}</StyledTableCell>
      <StyledTableCell  style={{ width: '15%' }} align="left">{setor}</StyledTableCell>
      <StyledTableCell  style={{ width: '15%' }} align="left">{data.getDay() + '/' + data.getMonth() + '/' + data.getFullYear()}</StyledTableCell>
      <StyledTableCell style={{ width: '15%' }} align="left">{status}</StyledTableCell>
      <StyledTableCell  style={{ width: '15%' }} align="left">{data.getDay() + '/' + data.getMonth() + '/' + data.getFullYear()}</StyledTableCell>
      <StyledTableCell  style={{ width: '15%' }} align="left">{createActions(status, classes)}</StyledTableCell>
    
    </StyledTableRow>
  )
}


const useStyles = themes => ({
  table: {
    minWidth:650,
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

    elementsTable.push(createData('Usuário-Auditor', 'Compras', 'Aguardando DI',classes))
    elementsTable.push(createData('Usuário-Auditor', 'Compras', 'Aguardando diagnóstico',classes))
    elementsTable.push(createData('Usuário-Auditor', 'Compras', 'Aguardando análise',classes))
    elementsTable.push(createData('Usuário-Auditor', 'Compras', 'Avaliado',classes))
    console.log(elementsTable)
    return (
      <TableContainer>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              {/*Head da tabela */}
              <StyledTableCell style={{ width: '20%' }} align="left">Nome</StyledTableCell>
              <StyledTableCell style={{ width: '15%' }} align="left">Setor</StyledTableCell>
              <StyledTableCell style={{ width: '15%' }} align="left">Data de abertura</StyledTableCell>
              <StyledTableCell style={{ width: '15%' }} align="left">Status</StyledTableCell>
              <StyledTableCell style={{ width: '10%' }} align="left">Última atualização</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {/*Percorre o array "rows" e adiciona cada elemento na tabela */}
            
            {elementsTable}

          </TableBody>
          <TableFooter>
          <TableRow style={{width:'100%'}}>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              labelRowsPerPage = 'linhas por página: '
              labelDisplayedRows={({ from, to, count }) => `1-4 de 4`}
              count={this.state.form.length}
              rowsPerPage={this.state.rowsPerPage}
              page={this.state.page}
              SelectProps={{
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
function createActions(status,classes) {
  var titulo=''
  if(status == 'Aguardando DI') titulo = 'Registrar DI'
  if(status == 'Aguardando diagnóstico') titulo = 'Registrar diagnóstico'
  if(status == 'Aguardando análise') titulo = 'Avaliar plano de trabalho'
  if(status == 'Avaliado') titulo = 'Abrir'
  return (
    <div>
      <IconButton className={classes.btn} size="small" title="Imprimir">
        <PrintIcon style={{ color: "#6e7573" }} />
      </IconButton>
      
      <IconButton className={classes.btn} size="small" title={titulo}>
        <AssignmentIcon style={{ color: "#6e7573" }} />
      </IconButton>
    
      
    </div>
  )
}

export default withStyles(useStyles)(TableAuditoria)
