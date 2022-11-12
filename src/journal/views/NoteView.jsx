import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useForm } from "../../hooks";
import { ImageGallery } from "../components";

export const NoteView = () => {

    const { active: note } = useSelector(store => store.journal)

    const { body, title, date, onInputChange, formState } = useForm(note);

    const dateString = useMemo(()=>{
        const newDate = new Date(date);
        return newDate.toUTCString();
    },[date])

    return (
        <Grid container
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            sx={{ mb: 1 }}
        >
            <Grid item>
                <Typography fontSize={39} fontWeight='ligth'>{dateString}</Typography>
            </Grid>
            <Grid item>
                <Button
                    color='primary'
                    sx={{ padding: 2 }}
                >
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>
            <Grid container>
                <TextField type='text'
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un título"
                    label='Título'
                    sx={{ border: 'none', mb: 1 }}
                    value={title}
                    name='title'
                    onChange={onInputChange}
                />
            </Grid>
            <Grid container>
                <TextField type='text'
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Qué sucedió en el día de hoy?"
                    minRows={5}
                    value={body}
                    name='body'
                    onChange={onInputChange}
                />
            </Grid>
            {/* Gareleria de imagenes */}
            <ImageGallery />

        </Grid>
    )
}
