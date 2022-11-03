import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth';
import { CheckingAuth } from '../components';
import { useCheckAuth } from '../hooks';
import { JournalRoutes } from '../journal';

export const AppRouter = () => {

  const { status } =  useCheckAuth();

  if (status === 'checking') {
    return <CheckingAuth />
  }

  return (
    <Routes>

      {
        status === 'authenticated'
          ? <Route path='/*' element={<JournalRoutes />} />
          : <Route path='/auth/*' element={<AuthRoutes />} />
      }

      <Route path='/*' element={<Navigate to='/auth/login' />}/>

      {/* Login and register */}
      {/*  <Route path='/auth/*' element={<AuthRoutes />} /> */}
      {/* Journal Routes  */}
      {/*  <Route path='/*' element={<JournalRoutes />} /> */}

    </Routes>
  )
}
