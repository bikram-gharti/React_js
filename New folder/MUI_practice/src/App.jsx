import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import CoffeeIcon from '@mui/icons-material/Coffee';


const App = () => {
  return (
    <>
      <AppBar position="sticky" color="primary" >
        <Container>
          <Toolbar>
            <CoffeeIcon />
            <Typography variant="h5">
              coffiee shop
            </Typography>
            <Button color="inherit" href='home'>
              HOME
            </Button>
            <Button color="inherit" href='home'>
              HOME
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

export default App
