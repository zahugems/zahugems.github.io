import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
