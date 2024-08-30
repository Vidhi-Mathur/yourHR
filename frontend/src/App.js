import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Pages/HomePage';
import { SignupForm } from './components/Pages/SignupPage';
import { Layout } from './components/UI/Layout';

function App() {
  return (
        <Router>
            <Layout>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/signup" element={<SignupForm />} />
                </Routes>
            </Layout>
        </Router>
    )
}

export default App;