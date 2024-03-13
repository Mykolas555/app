import './App.css'
import { ThemeProvider } from "@/components/theme-provider"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from '../Header';
import Home from '../Home';
import Footer from '../Footer';
import Forecast from '../Forecast';
import Login from '../Login';
import Register from '../Register';
import Shopper from '../Shopper';
import Gallery from '../Gallery';
import { Toaster } from '../ui/toaster';

const App = () => {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Toaster/>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/shopper" element={<Shopper />} />
          <Route path="/forecast" element={<Forecast />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer/>
      </Router>
    </ThemeProvider>
  )
}

export default App
