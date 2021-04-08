import React from 'react';


import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 100,
    height: 100,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
	border: "1px solid black",
	borderRadius : "50%"
  },
}));



const ImageComponent = ({ src, title, id }) => {
	const classes = useStyles();

	const image  = "https://avatars.dicebear.com/api/avataaars/example.svg?top%5B%5D=shortHair&accessoriesChance=93"

	// const [ image,setImage] = useState("");

	return (
		<div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={image} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  <span style={{fontWeight:"500", fontSize:"0.85rem"}}>Description:</span> {title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  <span style={{fontWeight:"500", fontSize:"0.85rem"}}>Profile ID:</span> {id}
                </Typography>
              </Grid>

            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
	)
	
};

export default ImageComponent;
