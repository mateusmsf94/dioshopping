import {useState} from 'react';
import { Grid, Button, TextField } from '@material-ui/core/';

const Contatos = () => {
    return(
        <>
            <Grid container direction="row" xs={12}>
                <TextField id="name" label="Name" fullWidth/>
                <TextField id="message" label="Message" fullWidth/>
            </Grid>
            <Button className="mt-2" variant="contained" color="primary">
                Sent
            </Button>
            <div className="card mt-2">
                <div className="card-body">
                    <h5 className="card-title">Author</h5>
                    <p className="card-text">message content.</p>
                    <p className="card-text"><small class="text-muted">message date</small></p>
                </div>                
            </div>            
        </>
    )
}

export default Contatos;
