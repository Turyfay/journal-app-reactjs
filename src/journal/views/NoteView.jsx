import { Button, Grid, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";
import { SaveOutlined } from "@mui/icons-material";
import { useEffect, useMemo } from "react";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { setActiveNote } from "../../store/journal/journalSlice";
import { startSaveNote } from "../../store/journal/thunks";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';

export const NoteView = () => {
    const dispatch = useDispatch();
    const { active: note, messageSaved,isSaving } = useSelector(store => store.journal)

    const { body, title, date, onInputChange, formState } = useForm(note);

    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString();
    }, [date]);

    useEffect(() => {
        dispatch(setActiveNote(formState));
    }, [formState]);
    useEffect(() => {
        if (messageSaved.length > 0) Swal.fire('Nota Actualizada', messageSaved, 'success');
    }, [messageSaved])


    const onSaveNote = () => {
        dispatch(startSaveNote())
    }


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
                    onClick={onSaveNote}
                    color='primary'
                    sx={{ padding: 2 }}
                    disabled={isSaving}
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
