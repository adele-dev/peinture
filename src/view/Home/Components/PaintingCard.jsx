import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "250px",
    marginRight: "15px",
    marginBottom: "15px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

function PaintingCard({ title, artist, format, price, description, image }) {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardHeader title={title} subheader={artist} />
        <CardMedia className={classes.media} image={image} title={title} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {format}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {price} euros
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
}

export default PaintingCard;
