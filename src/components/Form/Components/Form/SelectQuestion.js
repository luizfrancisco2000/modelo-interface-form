import React from 'react'
import { loadCSS } from 'fg-loadcss';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import MenuItem from "@material-ui/core/MenuItem";

import '../Builder.css'

export default props =>{
    const [current, setCurrent] = React.useState(1)

    React.useEffect(() => {
        const node = loadCSS(
          'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
          document.querySelector('#font-awesome-css'),
        );
    
        return () => {
          node.parentNode.removeChild(node);
        };
      }, []);

    const changeSelect = (event) =>{
        setCurrent(event.target.value)
        props.changeType(event.target.value)
    }
    
    return(
        <TextField style={{width:'30%', height:40, marginLeft:10}} variant="outlined" select
            InputLabelProps={{
              shrink: true,
            }}
            SelectProps={{
                className: "inputQuestion"
            }}
            MenuProps={{
              className:"select"
            }}
            value={current}
            onChange={(event) => changeSelect(event)}
            
            renderValue={{
              className:"select"
            }}
          >
            <MenuItem value={1}><Icon className="fa fa-align-left" />Texto Curto</MenuItem>
            <MenuItem value={2}><Icon className="fa fa-align-justify"/>Parágrafo Curto</MenuItem>
            <MenuItem value={3}><Icon className="fa fa-bullseye"/>Múltipla escolha</MenuItem>
            <MenuItem value={4}><Icon className="fa fa-check-square"/>Checklist</MenuItem>
            <MenuItem value={5}><Icon className="fa fa-caret-square-down"/>Combobox</MenuItem>
            <MenuItem value={6}><Icon className="fa fa-envelope-square" />Email</MenuItem>
            <MenuItem value={7}><Icon className="fas fa-phone-alt"/>Telefone</MenuItem>
            <MenuItem value={8}><Icon className="far fa-file-alt" />Arquivo</MenuItem>
            <MenuItem value={9}><Icon className="fa fa-calendar-check"/>Data</MenuItem>     
        </TextField>
    )
}