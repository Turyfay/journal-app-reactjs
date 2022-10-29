import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { themeMain } from "./themeMain"


export const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={themeMain} >
        <CssBaseline/>
        {children}
    </ThemeProvider>
  )
}
