
import { Navigate, Route, Routes } from "react-router-dom"
import { LoginScreen } from "../screens/LoginScreen"
import { RegisterScreen } from "../screens/RegisterScreen"

export const AuthRoutes = () => {

 


  return (
    <Routes>
      <Route path="login" element={<LoginScreen />} />
      <Route path="register" element={<RegisterScreen />} />


      <Route path="/*" element={<Navigate to='/auth/login' />} />
    </Routes>
  )
}
