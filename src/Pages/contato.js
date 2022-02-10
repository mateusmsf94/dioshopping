import {useEffect, useState} from 'react';
import { Grid, Button, TextField } from '@material-ui/core/';

const Contatos = () => {
    
    const url = 'http://localhost:5000/message'
    const [message, setMessage] = useState([]);
    const [author, setAuthor] = useState('');
    

    useEffect(async () => {
        const response = await fetch(url);
        const data = await response.json();
        setMessage(data);
    }, [])

    console.log(message)
    
    return(
        <>
            <Grid container direction="row" xs={12}>
                <TextField id="name" label="Name" fullWidth/>
                <TextField id="message" label="Message" fullWidth/>
            </Grid>
            <Button className="mt-2" variant="contained" color="primary">
                Sent
            </Button>
            {message.map((content) => {
                return(
                    <div className="card mt-2" key={content.id}>
                        <div className="card-body">
                            <h5 className="card-title">{content.email}</h5>
                            <p className="card-text">{content.message}</p>
                            <p className="card-text"><small class="text-muted">message date</small></p>
                        </div>                
                    </div>            

                )
            })}
        </>
    )
}

export default Contatos;
