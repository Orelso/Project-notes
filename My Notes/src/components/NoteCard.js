import React from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { FormControlLabel, FormGroup, IconButton, Typography } from "@mui/material";
import { DeleteOutlined } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider } from "@mui/material";
import { blue } from "@mui/material/colors";


const theme = createTheme ({
    palette: {
        category: {
            color: blue
        }
    }
})

const useStyles = makeStyles({
    test: {
        border: (note) => {
            if (note.category == 'HTML/CSS') {
                return '2px solid blue' 
            } else if (note.category == 'Javascript') {
                return '2px solid green'
            } else if (note.category == "Javascript/React") {
                return '2px solid yellow'
            }else if (note.category == 'MUI') {
                return '2px solid red'
            }
        }
    },
})



export default function NoteCard({ note, handleDelete }) {
    const classes = useStyles(note)
    return (
        <div>
            <Card elevation={10} className={classes.test}>
                <CardHeader 
                    action={ // 200
                        <IconButton onClick={() => handleDelete(note.id)}> 
                            <DeleteOutlined />
                        </IconButton>
                    }
                    title={<span style={{fontFamily: "monospace", color: "#000000"}}>{note.title}</span>}
                    subheader={<span style={{fontFamily: "Courier New", color: "#000000"}}>{note.category}</span>}                    />
                <CardContent>
                    <FormGroup>
                    <FormControlLabel sx={{color: '#000000'}} control={<Checkbox color="warning" defaultChecked />} label={note.details} />
                    <FormControlLabel sx={{color: '#555555'}} control={<Checkbox  />} label={note.details2} />
                    <FormControlLabel sx={{color: '#000000'}} control={<Checkbox disabledRipple />} label={note.details2} />
                    
                    </FormGroup>
                </CardContent>
            </Card>
        </div>
    )
}

