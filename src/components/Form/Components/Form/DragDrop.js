import React from 'react'
import Icon from '@material-ui/core/Icon';
import { loadCSS } from 'fg-loadcss';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root:{
        position:'fixed',
        
        left:'75%'
    },
    icon: {
        color:'#6e7573',
        display:'flex',
        alignItems:'center',
        backgroundColor:'#DCDCDC',
        width:200,
        padding:10,
        '&:nth-of-type(odd)': {
            backgroundColor: '#fff',
          },
        
    },
  });

export default props =>{
    const classes = useStyles()
    React.useEffect(() => {
        const node = loadCSS(
          'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
          document.querySelector('#font-awesome-css'),
        );
    
        return () => {
          node.parentNode.removeChild(node);
        };
      }, []);

  
    return(
        <div className={classes.root}>
            <div className={classes.icon} draggable="true" onDragStart={(event) => props.onDragStart(event,1)} >
                <Icon  className="fa fa-align-left"  />  
                <span style={{marginLeft:10}}>Texto curto</span>
            </div>
            <div className={classes.icon} onDragStart={(event) => props.onDragStart(event,2)} draggable="true">
                <Icon draggable="true" className="fa fa-align-justify"/> 
                <span style={{marginLeft:10}} >Parágrafo</span>
            </div>
            <div className={classes.icon} onDragStart={(event) => props.onDragStart(event,3)} draggable="true">
                <Icon draggable="true" className="fa fa-bullseye" /> 
                <span style={{marginLeft:10}}>Múltipla escolha</span>
            </div> 
            <div className={classes.icon} onDragStart={(event) => props.onDragStart(event,4)} draggable="true">
                <Icon className="fa fa-check-square"/> 
                <span style={{marginLeft:10}}>CheckList</span>
            </div>
            <div className={classes.icon} onDragStart={(event) => props.onDragStart(event,5)} draggable="true">
                <Icon className="fa fa-caret-square-down" />
                <span style={{marginLeft:10}}>Combobox</span>
            </div>

            <div className={classes.icon} onDragStart={(event) => props.onDragStart(event,6)} draggable="true">
                <Icon className="fa fa-envelope-square"/> 
                <span style={{marginLeft:10}}>Email</span>
            </div>
            
            <div className={classes.icon} onDragStart={(event) => props.onDragStart(event,7)} draggable="true">
                <Icon className="fas fa-phone-alt"/> 
                <span style={{marginLeft:10}}>Telefone</span>
            </div>

            <div className={classes.icon} onDragStart={(event) => props.onDragStart(event,8)} draggable="true">
                <Icon className="far fa-file-alt" /> 
                <span style={{marginLeft:10}}>Arquivo</span>
            </div>

            <div className={classes.icon} onDragStart={(event) => props.onDragStart(event,9)} draggable="true">
                <Icon className="fa fa-calendar-check" />
                <span style={{marginLeft:10}}>Data</span>  
            </div>      

            
        </div>
    )
}