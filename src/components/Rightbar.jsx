import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
      <Box sx={{ 
        display: { xs: 'none', sm: 'block' }}} 
        flex={2} >
          <Box position="fixed" width={300}>
                <Typography variant='h6' fontWeight={200}>
                    Online Friends
                </Typography>
                <AvatarGroup max={4}>
                  <Avatar alt="Rose" src="https://i.pinimg.com/originals/47/c4/e1/47c4e1bd9c00a609664723ff095c7a39.jpg" />
                  <Avatar alt="Lisa" src="https://assets.teenvogue.com/photos/6238abc39bc13dfe6f31e101/16:9/w_2560%2Cc_limit/1157862349" />
                  <Avatar alt="Jenny" src="https://i.zoomtventertainment.com/story/Jennie_8.png" />
                  <Avatar alt="Jisoo" src="https://www.somagnews.com/wp-content/uploads/2021/01/jisoo.jpg" />
                  <Avatar alt="Jisoo" src="https://www.somagnews.com/wp-content/uploads/2021/01/jisoo.jpg" />
                  <Avatar alt="Jisoo" src="https://www.somagnews.com/wp-content/uploads/2021/01/jisoo.jpg" />
                </AvatarGroup>
                {/* Latest Photos */}
                <Typography variant='h6' fontWeight={200} mt={2} mb={2}>
                    Latest Photos
                </Typography>
                <ImageList cols={3} rowHeight={100}>
                    <ImageListItem>
                      <img src='https://www.somagnews.com/wp-content/uploads/2021/01/jisoo.jpg' loading="lazy"/>
                    </ImageListItem>
                  <ImageListItem>
                      <img src='https://i.zoomtventertainment.com/story/Jennie_8.png' loading="lazy" />
                  </ImageListItem>
                  <ImageListItem>
                      <img src='https://i.pinimg.com/originals/47/c4/e1/47c4e1bd9c00a609664723ff095c7a39.jpg' loading="lazy" />
                  </ImageListItem>
                  <ImageListItem>
                      <img src='https://assets.teenvogue.com/photos/6238abc39bc13dfe6f31e101/16:9/w_2560%2Cc_limit/1157862349' loading="lazy" />
                  </ImageListItem>
                  <ImageListItem>
                      <img src='https://assets.teenvogue.com/photos/6238abc39bc13dfe6f31e101/16:9/w_2560%2Cc_limit/1157862349' loading="lazy" />
                  </ImageListItem>
                </ImageList>
                {/* Latest Coversation */}
              <Typography variant='h6' fontWeight={200}>
                    Latest Conversation
              </Typography>

            </Box>
      </Box>
  )
}

export default Rightbar