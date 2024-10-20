import './App.css'
import Bar from './components/Bar'
import Landing from './components/Landing'
import Error from './components/Error'
import NowPlaying from './components/NowPlaying';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Results from './components/Results'
import theme from './components/ui/ThemeMovie'
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <>
    <Router>
      <ThemeProvider theme={theme}>
      <Bar />
        </ThemeProvider>
      <Routes>
        <Route path='/' Component={Landing}/>
        <Route path='/now-playing' element={<NowPlaying />}/>
        <Route path='/results' element={<Results />}/>
        <Route path="*" element={<Error />} /> 
      </Routes>
    </Router>
    </>
  )
}

export default App;