import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth';
import { JournalRoutes } from '../journal';

export const AppRouter = () => {
  return (
    <Routes>
      {/* Login and register */}
      <Route path='/auth/*' element={<AuthRoutes />} />
      {/* Journal Routes  */}
      <Route path='/*' element={<JournalRoutes />} />

    </Routes>
  )
}


