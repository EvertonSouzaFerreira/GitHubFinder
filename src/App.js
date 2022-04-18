import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";
import NotFound from "./pages/NotFound";
import { GithubProvider } from "./context/github/GuihubContext";
import { AlertProvaider } from "./context/alert/AlertContext";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <GithubProvider>
      <AlertProvaider>
        <Router>
          <div className="flex flex-col justify-between h-screen" >
            <Navbar />

            <main className="container mx-auto px-3 pb-12">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/notfound" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
              <Route path={`/user/:login`} element={<User />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </AlertProvaider>
    </GithubProvider>
  );
}

export default App;
