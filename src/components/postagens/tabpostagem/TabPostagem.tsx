import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
        setValue(newValue);
    }
    return (
        <>
            <TabContext value={value}>
                <AppBar position="static" >
                    <Tabs centered className='cor-tabpostagem' onChange={handleChange}>
                        <Tab label="Todas as postagens" value="1" />
                        <Tab label="Sobre-nós" value="2" />
                    </Tabs>
                </AppBar>
                <TabPanel value="1" >
                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <ListaPostagem />
                    </Box>
                </TabPanel>
                <TabPanel value="2">
                    <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre-nós</Typography>
                    <Typography variant="body1" gutterBottom color="textPrimary" align="justify">Podemos considerar a bioinformática como uma linha de pesquisa que envolve aspectos multidisciplinares e que surgiu a partir do momento em que se iniciou a utilização de ferramentas computacionais para a análise de dados genéticos, bioquímicos e de biologia molecular. A bioinformática envolve a união de diversas linhas de conhecimento – a ciência da computação, a engenharia de softwares, a matemática, a estatística e a biologia molecular – e tem como finalidade principal desvendar a grande quantidade de dados que vem sendo obtida através de seqüências de DNA e proteínas. Para o desenvolvimento de genomas completos, a informática é imprescindível e a biologia molecular moderna não estaria tão avançada hoje, não fossem os recursos computacionais existentes. </Typography>
                </TabPanel>
            </TabContext>
        </>
    );
}
export default TabPostagem;