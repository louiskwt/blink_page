import { Box, createTheme, Stack, ThemeProvider } from "@mui/material"
import Feed from "./components/Feed"
import Rightbar from "./components/Rightbar"
import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import AddTab from "./components/AddTab"
import React, {useState} from "react"


function App() {
  const [mode, setMode] = useState('light')

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    }
  })

  const changeTheme = () => {
    if(mode === 'light') {
      setMode('dark')
    } else {
      setMode('light')
    }
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        {/* Navbar */}
        <Navbar />
        <Stack height={'100%'} direction="row" spacing={2} justifyContent="space-between">
          <Sidebar changeTheme={changeTheme} />
          <Feed />
          <Rightbar />
        </Stack>
        <AddTab />
      </Box>
    </ThemeProvider>

  )
}

export default App



  // // Styling your own component using MUI
  // const BlueBtn = styled(Button)({
  //   backgroundColor: 'skyblue',
  //   color: '#000',
  //   margin: 5,
  //   "&:hover": {
  //     backgroundColor: 'lightblue'
  //   },
  //   "&:disabled": {
  //     backgroundColor: "gray",
  //     color: "white"
  //   }
  // })