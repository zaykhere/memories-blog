import React, {useEffect,useState} from 'react';
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core';
import memories from './images/memories.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';
import store from './store';
import {useDispatch} from 'react-redux';
import {getPosts} from './actions/postsAction';

import {Provider} from 'react-redux';

const App= () => {
    const [currentId,setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getPosts())  
    }, [currentId, dispatch])

    return (
    <Provider store={store}> 
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h2" align="center">Memories</Typography>
        <img src={memories} className={classes.image} alt="memories" height="60" width="100"  />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container className={classes.mainContainer} justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}> <Posts setCurrentId={setCurrentId} />  </Grid>
            <Grid item xs={12} sm={4}> <Form currentId={currentId} setCurrentId={setCurrentId} />  </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
    </Provider> 
  );
}


export default App;
