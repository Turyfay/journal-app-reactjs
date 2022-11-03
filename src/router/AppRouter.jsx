import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth';
import { CheckingAuth } from '../components';
import { FirebaseAuth } from '../firebase/config';
import { JournalRoutes } from '../journal';
import { login, logout } from '../store/auth';

export const AppRouter = () => {

  const { status } = useSelector(store => store.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      console.log(user);
      if (!user) return dispatch(logout());
      const { uid, email, displayName, photoURL } = user;
      dispatch(login({ uid, email, displayName, photoURL }));
    })
  }, []);

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
