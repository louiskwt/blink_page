import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from 'react'
import { Favorite, FavoriteBorder } from '@mui/icons-material';

const Feed = () => {
  return (
      <Box flex={4} p={2} >
          <Card sx={{ minWidth: 345 }}>
              <CardHeader
                  avatar={
                      <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                          R
                      </Avatar>
                  }
                  action={
                      <IconButton aria-label="settings">
                          <MoreVertIcon />
                      </IconButton>
                  }
                  title="Rose is Cute"
                  subheader="September 14, 2016"
              />
              <CardMedia
                  component="img"
                  height="194"
                  image="https://images.mid-day.com/images/images/2022/mar/blackpinkroseresized_d.jpg"
                  alt="Paella dish"
              />
              <CardContent>
                  <Typography variant="body2" color="text.secondary">
                      This impressive paella is a perfect party dish and a fun meal to cook
                      together with your guests. Add 1 cup of frozen peas along with the mussels,
                      if you like.
                  </Typography>
              </CardContent>
              <CardActions disableSpacing>
                  <IconButton aria-label="favorite">
                      <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'red' }} />} />
                  </IconButton>
          
                  <IconButton aria-label="share">
                      <ShareIcon />
                  </IconButton>
              </CardActions>
          </Card>
          <Card sx={{ minWidth: 345 }}>
              <CardHeader
                  avatar={
                      <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                          R
                      </Avatar>
                  }
                  action={
                      <IconButton aria-label="settings">
                          <MoreVertIcon />
                      </IconButton>
                  }
                  title="Rose is Cute"
                  subheader="September 14, 2016"
              />
              <CardMedia
                  component="img"
                  height="194"
                  image="https://images.mid-day.com/images/images/2022/mar/blackpinkroseresized_d.jpg"
                  alt="Paella dish"
              />
              <CardContent>
                  <Typography variant="body2" color="text.secondary">
                      This impressive paella is a perfect party dish and a fun meal to cook
                      together with your guests. Add 1 cup of frozen peas along with the mussels,
                      if you like.
                  </Typography>
              </CardContent>
              <CardActions disableSpacing>
                  <IconButton aria-label="favorite">
                      <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'red' }} />} />
                  </IconButton>
          
                  <IconButton aria-label="share">
                      <ShareIcon />
                  </IconButton>
              </CardActions>
          </Card>
          <Card sx={{ minWidth: 345 }}>
              <CardHeader
                  avatar={
                      <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                          R
                      </Avatar>
                  }
                  action={
                      <IconButton aria-label="settings">
                          <MoreVertIcon />
                      </IconButton>
                  }
                  title="Rose is Cute"
                  subheader="September 14, 2016"
              />
              <CardMedia
                  component="img"
                  height="194"
                  image="https://images.mid-day.com/images/images/2022/mar/blackpinkroseresized_d.jpg"
                  alt="Paella dish"
              />
              <CardContent>
                  <Typography variant="body2" color="text.secondary">
                      This impressive paella is a perfect party dish and a fun meal to cook
                      together with your guests. Add 1 cup of frozen peas along with the mussels,
                      if you like.
                  </Typography>
              </CardContent>
              <CardActions disableSpacing>
                  <IconButton aria-label="favorite">
                      <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'red' }} />} />
                  </IconButton>
          
                  <IconButton aria-label="share">
                      <ShareIcon />
                  </IconButton>
              </CardActions>
          </Card>
          <Card sx={{ minWidth: 345 }}>
              <CardHeader
                  avatar={
                      <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                          R
                      </Avatar>
                  }
                  action={
                      <IconButton aria-label="settings">
                          <MoreVertIcon />
                      </IconButton>
                  }
                  title="Rose is Cute"
                  subheader="September 14, 2016"
              />
              <CardMedia
                  component="img"
                  height="194"
                  image="https://images.mid-day.com/images/images/2022/mar/blackpinkroseresized_d.jpg"
                  alt="Paella dish"
              />
              <CardContent>
                  <Typography variant="body2" color="text.secondary">
                      This impressive paella is a perfect party dish and a fun meal to cook
                      together with your guests. Add 1 cup of frozen peas along with the mussels,
                      if you like.
                  </Typography>
              </CardContent>
              <CardActions disableSpacing>
                  <IconButton aria-label="favorite">
                      <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'red' }} />} />
                  </IconButton>
          
                  <IconButton aria-label="share">
                      <ShareIcon />
                  </IconButton>
              </CardActions>
          </Card>
          <Card sx={{ minWidth: 345 }}>
              <CardHeader
                  avatar={
                      <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                          R
                      </Avatar>
                  }
                  action={
                      <IconButton aria-label="settings">
                          <MoreVertIcon />
                      </IconButton>
                  }
                  title="Rose is Cute"
                  subheader="September 14, 2016"
              />
              <CardMedia
                  component="img"
                  height="194"
                  image="https://images.mid-day.com/images/images/2022/mar/blackpinkroseresized_d.jpg"
                  alt="Paella dish"
              />
              <CardContent>
                  <Typography variant="body2" color="text.secondary">
                      This impressive paella is a perfect party dish and a fun meal to cook
                      together with your guests. Add 1 cup of frozen peas along with the mussels,
                      if you like.
                  </Typography>
              </CardContent>
              <CardActions disableSpacing>
                  <IconButton aria-label="favorite">
                      <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'red' }} />} />
                  </IconButton>
          
                  <IconButton aria-label="share">
                      <ShareIcon />
                  </IconButton>
              </CardActions>
          </Card>
      </Box>
  )
}

export default Feed