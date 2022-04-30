import { Add,  Image, EmojiEmotions, VideoCameraBack, PersonAdd, DateRange } from '@mui/icons-material'
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'

const StyledModal = styled(Modal)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})


const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '20px'
})

const AddTab = () => {
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false)
  }
  const handleOpen = () => {
    setOpen(true)
  }


  return (
    <>
      <Tooltip title="Add Post" sx={{ position: 'fixed', bottom: 20, right: 2 }} onClick={handleOpen}>
        <Fab color='primary' aria-label="add" >
          <Add />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={380} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5} >
            <Typography variant='h6' textAlign={'center'}>
              Create Post
            </Typography>
            <UserBox >
              <Avatar src='https://i.pinimg.com/originals/47/c4/e1/47c4e1bd9c00a609664723ff095c7a39.jpg' />
              <Typography variant='span' fontWeight={500}>Rose</Typography>
            </UserBox>
            <TextField
              sx={{ width: '100%' }}
              id="outlined-multiline-static"
              label="Your Post"
              multiline
              rows={5}
              placeholder="What's on your mind"
            />
            <Stack direction={"row"} gap={1} mt={2} mb={3}>
              <EmojiEmotions color="primary" />
              <Image color="secondary"/>
              <VideoCameraBack color="success"/>
              <PersonAdd color="error" />
            </Stack>
            <ButtonGroup
              fullWidth
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button>Post</Button>
              <Button sx={{width: '100px'}}>
                <DateRange />
              </Button>
            </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  )
}

export default AddTab