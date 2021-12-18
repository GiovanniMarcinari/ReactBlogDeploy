import React, { useEffect } from 'react';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import './Home.css';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';

function Home() {

    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            history.push("/login")

        }
    }, [token])
  
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#1E3276" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Link to="/posts" className="text-decorator-none">
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#1E3276", color: "white" }}>Ver Postagens</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/FqE6URO.jpg" alt="" width="550px" height="550px" />
                </Grid>
                <Grid xs={12} className='postagens'>
                    <TabPostagem />    
            </Grid>
            </Grid>
        </>
    );
}

export default Home;