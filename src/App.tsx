import React from 'react';
import Header from './components/Header';
import { Divider, ThemeProvider, createTheme } from '@mui/material';
import { Outlet, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import RegisterPage from './pages/RegisterPage';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import CoursePage from './pages/CoursePage';
import ModulePage from './pages/ModulePage';
import StepPage from './pages/StepPage';



function App() {

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Inter',
        'sans-serif',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif'
      ].join(','),
    },
    palette: {
      primary: {
        main: "#000000",
        light: '#eee',
        dark: '#828282',
        contrastText: '#fff',
      },
      secondary: {
        main: "#000000",
        light: '#eee',
        dark: '#1f1f1f',
        contrastText: '#fff',
      }
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableRipple: true,
          disableElevation: true
        },
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontFamily: 'Inter, sans-serif',
            fontSize: '16px',
            lineHeight: '24px',
            borderRadius: '8px',
            fontWeight: '500',
            padding: '14px 24px',
            backgroundColor: 'primary.light',
            '&:hover': {
              backgroundColor: 'palette.secondary.dark',
              color: 'palette.secondary.dark'
            }
          },
        }
      },
      MuiAccordionSummary: {
        styleOverrides: {
          content: {
            margin: 0
          }
        }
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/home' element={
          <>
            <Header />
            <HomePage />
            <Divider />
            <Footer />
          </>
        }
        />
        <Route path='/register' element={
          <RegisterPage />
        }
        />
        <Route path='/auth' element={
          <AuthPage />
        }
        />
        <Route path='course/:course_id' element={
          <CoursePage />
        }
        />
        <Route path='course/:course_id/module/:module_id' element={
          <ModulePage />
        }
        />
        <Route path='course/:course_id/module/:module_id/lesson/:lesson_id/step/:step_id' element={
          <StepPage />
        }
        />
      </Routes>
    </ThemeProvider>
  );
}


export default App;
