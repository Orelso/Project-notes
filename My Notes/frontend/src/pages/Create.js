import React, { useState } from 'react'
import { FormControlLabel, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useHistory } from 'react-router-dom';
import { pink } from '@mui/material/colors';



/* Styling Section (CSS) */
const useStyles = makeStyles({
  // field: {
  //   marginTop: 20,
  //   marginBottom: 20,
  //   display: 'block'
  // },
  title: {
    color: 'orange',
    textDecoration: 'underline',
    marginBottom: 20
  },
});

export default function Create() {
  const classes = useStyles();
  const history = useHistory() // 105
  const [title, setTitle] = useState('') // 101
  const [details, setDetails] = useState('') // 102
  const [details2, setDetails2] = useState('') 
  const [details3, setDetails3] = useState('') 

  const [details4, setDetails4] = useState('') 

  const [titleError, setTitleError] = useState(false) // 103
  const [detailsError, setDetailsError] = useState(false) // 104
  // const [detailsError2, setDetailsError2] = useState(false) // 104
  // const [detailsError3, setDetailsError3] = useState(false) // 104
  // const [detailsError4, setDetailsError4] = useState(false) // 104


  const [category, setCategory] = useState('todos')

  const handleSubmit = (e) => {
    e.preventDefault() // prevents default action of the form ( no refreshing )

    setTitleError(false) // 103 sets the textfields back to false 
    setDetailsError(false) // 104 sets the textfields back to false

    if (title == '') { // if the title is equal to an empty string then error is true
      setTitleError(true) // 103
    }

    if (details == '') { // if the detail is equal to an empty string then error is true
      setDetailsError(true) //104
    }

    // if (details2 == '') { // if the detail is equal to an empty string then error is true
    //   setDetailsError2(true) //104
    // }

    // if (details3 == '') { // if the detail is equal to an empty string then error is true
    //   setDetailsError2(true) //104
    // }

    // if (details4 == '') { // if the detail is equal to an empty string then error is true
    //   setDetailsError2(true) //104
    // }


    if (title && details) {
      fetch('http://localhost:8000/notes', {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({ title, details,details2, details3, details4, category })
      }).then(() => history.push('/')) // 105
    }

  //   if (title && details ) {
  //     fetch('http://localhost:8000/notes', {
  //       method: 'POST',
  //       headers: {"Content-type": "application/json"},
  //       body: JSON.stringify({ title, details, details2, category })
  //     }).then(() => history.push('/')) // 105
  //   }
  }


  return (
    <Container>
      <Typography className={classes.title} variant="h6" component='h2' gutterBottom align='center'>
        To be done
      </Typography>

      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField
          onChange={(e)=> setTitle(e.target.value)} // 101
          sx={{marginTop: 3, marginBottom: 2, display: 'block'}}
          label="Project Title"
          variant='outlined'
          color='secondary'
          fullWidth // makes form the length of page
          required // adds astrik
          error={titleError}
          />
        <TextField
          onChange={(e)=> setDetails(e.target.value)} // 102
          sx={{marginTop: 3, marginBottom: 2, display: 'block'}}
          label="Details"
          variant='outlined'
          color='secondary'
          multiline // several lines
          rows={3} // with 4 rows
          fullWidth // makes form the length of page
          required // adds astrik
          error={detailsError}
          >
        </TextField>

        <TextField
          onChange={(e)=> setDetails2(e.target.value)} // 102
          sx={{marginTop: 3, marginBottom: 2, display: 'block'}}
          label="Details"
          variant='outlined'
          color='secondary'
          multiline // several lines
          rows={1} // with 4 rows
          fullWidth // makes form the length of page
          required // adds astrik
          >
        </TextField>
        <TextField
          onChange={(e)=> setDetails3(e.target.value)} // 102
          sx={{marginTop: 3, marginBottom: 2, display: 'block'}}
          label="Details"
          variant='outlined'
          color='secondary'
          multiline // several lines
          rows={1} // with 4 rows
          fullWidth // makes form the length of page
      
          >
        </TextField>
        <TextField
          onChange={(e)=> setDetails4(e.target.value)} // 102
          sx={{marginTop: 3, marginBottom: 2, display: 'block'}}
          label="Details"
          variant='outlined'
          color='secondary'
          multiline // several lines
          rows={1} // with 4 rows
          fullWidth // makes form the length of page
          
          >
        </TextField>

        <FormControl sx={{marginTop: 3, marginBottom: 2, display: 'block'}}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup row value={category} onChange={(e) => setCategory(e.target.value)} /* allows for other values to be selected */>
          <FormControlLabel value='HTML/CSS'control={<Radio />} label='HTML/CSS' />
          <FormControlLabel value='Javascript'control={<Radio />} label='Javascript' />
          <FormControlLabel value='Javascript/React'control={<Radio />} label='Javascript/React' />
          <FormControlLabel value='MUI'control={<Radio />} label='MUI' />
          
          </RadioGroup>
        </FormControl>

        <Button 
        sx={{fontSize: 16,'&:hover': {backgroundColor: 'orange'}}} 
        type="submit" 
        variant='contained' 
        endIcon={<SendOutlinedIcon/>}
        >
        Submit
      </Button>
      </form>
    </Container>
  )
}
