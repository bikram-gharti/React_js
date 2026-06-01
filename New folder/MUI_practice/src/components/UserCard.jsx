import { Card,Typography, CardContent, List, ListItem, ListItemText, Link } from '@mui/material';
import { Container, fontSize, Box } from '@mui/system';

const UserCard = () => {
  return (
    <>
     <Container maxWidth="xs" sx={{ padding: 5 }}>
        <Card maxWidth="xs" sx={{ borderRadius: 5, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <CardContent sx= {{ mb: 2 }}>
              <Typography component="span" sx={{ color: 'green', fontWeight: 'bold', float: 'left' }}>available</Typography>
              <Typography component="span" sx={{ color: 'green', fontWeight: 'bold', float: 'right' }}>$55/hr</Typography>
          </CardContent>

          <CardContent>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1778546978399-0a9b63a84729?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="camel"
                sx={{
                  width: 150,
                  height: 150,
                  borderRadius: 50,
                  objectFit: 'cover',
                  display: 'block',
                  margin: '0 auto',
                }}
              />
          </CardContent>

          <CardContent sx = {{ textAlign: 'center' }}>
            <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold' }}> John Doe </Typography>
            <Typography variant="h6" component="h4" sx={{ fontSize: '0.75rem', color:'gray' }}> UI/UX Designer </Typography>
            <Typography variant="h6" component="h4" sx={{ fontSize: '0.75rem', color:'skyblue' }}> Epic Coders </Typography>
          </CardContent>

          <CardContent>
            <List sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', gap: 3 }}>
              <ListItem sx={{ textAlign: 'center', border: '1px solid gray', borderRadius: 4 }}>
                <ListItemText primary="UI" />
              </ListItem>
              <ListItem sx={{ textAlign: 'center', border: '1px solid gray', borderRadius: 4 }}>
                <ListItemText primary="UX" />
              </ListItem>
              <ListItem sx={{ textAlign: 'center', border: '1px solid gray', borderRadius: 4 }}>
                <ListItemText primary="PHP" />
              </ListItem>
              <ListItem sx={{ textAlign: 'center', border: '1px solid gray', borderRadius: 4, backgroundColor: 'skyblue', color: 'white'}}>
                <ListItemText primary="+2" />
              </ListItem>
            </List>
          </CardContent>

          <CardContent>
            <Typography variant="h6" component="h4" sx={{ fontSize: '0.95rem', color:'gray' }}> wade is a 32 year old UI/UX Designer, with an impressive portfolio behind him. </Typography>
          </CardContent>

          <CardContent sx={{textAlign:"center", borderTop: '1px solid lightgray', paddingTop: 2}}>
            <Link sx={{ fontWeight: 'bold', color: 'skyblue', textDecoration: 'none' }} href="#"
              underline="hover">
              VIEW PROFILE
            </Link>
          </CardContent>
        </Card>
      </Container>
    </>
  )
}

export default UserCard
