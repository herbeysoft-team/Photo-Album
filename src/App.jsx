import React from 'react';
import {Typography, CssBaseline, AppBar, Toolbar, Container, Grid, Button, Card, CardMedia, CardContent, CardActions} from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

import './App.css'


 const cards =[1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
  
  return (
    <>
       <CssBaseline/> 
        <AppBar position='relative'>
          <Toolbar>
            <PhotoCamera className='icon'/>
            <Typography variant="h6">
                Photo Album 
            </Typography>
          </Toolbar>
       </AppBar>
       <main>
        <div className='container'>
          <Container maxWidth="sm">
            <Typography variant="h2" align='center' color="textPrimary" gutterBottom>
                Photo Album 
            </Typography>
            <Typography variant="h5" align='center' color="textSecondary" paragraph>
                Hello Everyone ! This is a Photo Album and am trying to make the sentence as long as possible so we can see how it work
            </Typography>
            <div className='buttons'>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item> 
                      <Button variant='contained' color='primary'>
                          See my Photos
                      </Button>
                    </Grid> 
                    <Grid item> 
                      <Button variant='outlined' color='primary'>
                          Secondary Action
                      </Button>
                    </Grid> 
                </Grid>
            </div>
          </Container>
        </div>
        <Container className='cardGrid' maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card)=> (
                  <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className='card'>
                      <CardMedia 
                            component="img"
                            height="194"
                            alt="React + Material UI"
                            className='classMedia'
                            image="https://miro.medium.com/max/480/0*6lPHg32SjsdpRNZN.png"
                            title="Image Title"/>
                      <CardContent className='classContent'>
                        <Typography gutterBottom variant='h5'>
                            Heading

                        </Typography>
                        <Typography >
                            This is a media card, you can use this section to describe the content
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size='small' color='primary'>View</Button>
                        <Button size='small' color='primary'>Edit</Button>
                      </CardActions>
                  </Card>
              </Grid>
            ))}
   
          </Grid>
        </Container>
       </main>
      <footer className='footer'>
          <Typography gutterBottom variant='h6' align='center'>
                            Footer
          </Typography>
          <Typography gutterBottom variant='subtitle1' align='center' color="textSecondary">
                            developed by Abiodun Adam
          </Typography>
      </footer>
    </>
  );
}


export default App;