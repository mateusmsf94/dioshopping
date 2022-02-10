import {useEffect, useState} from 'react';
import { Grid, Button, TextField } from '@material-ui/core/';

const Contatos = () => {
    
    const url = 'http://localhost:5000/message'
    const [message, setMessage] = useState([]);
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [validator, setValidator] = useState(false);


    useEffect(async () => {
        const response = await fetch(url);
        const data = await response.json();
        setMessage(data);
    }, [])

    const sendMessage = () => {
        setValidator(false)
        if(author.length != 0 || content.length != 0) {
            return setValidator(!validator);
        }
    }
    
    return(
        <>
            <Grid container direction="row" xs={12}>
                <TextField id="name" label="Name" fullWidth value={author} onChange={(e) =>{setAuthor(e.target.value)} }/>
                <TextField id="message" label="Message" fullWidth value={content} onChange={(e) => {setContent(e.target.value)}}/>
            </Grid>
            {validator && 
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Por favor preencha todos os campos</strong> 
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>}
            <Button onClick={sendMessage} className="mt-2" variant="contained" color="primary">
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
