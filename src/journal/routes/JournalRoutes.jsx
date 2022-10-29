import { Navigate, Route, Routes } from 'react-router-dom';
import { JournalScreen } from '../screens/JournalScreen';



export const JournalRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<JournalScreen />} />
            <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
    )
}
