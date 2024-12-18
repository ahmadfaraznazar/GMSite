import Layout from '../src/layout'
import HomePage from './pages/homepage';
import Company from './pages/company';
import Blog from './pages/blogs'
import Casestudy from './pages/casestudy';
import Careers from './pages/careers';
import Form from './pages/contactus'
import Homepage2 from './pages/homepage2';
import Contactnew from './pages/contactnew'
import Scrolltop from '../src/pages/scroller/scroll'
import {  Route, Routes } from 'react-router-dom'; // Import routing components


// style imports//
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.css'
import './style/header.css'
import './style/hometop.css'
import './style/index.css'
import './style/cards.css'
import './style/company.css'
import './style/blogs.css'
import './style/careers.css'
import './style/mobile.css'
import './style/contactus.css'
import './style/large.css'
import './style/landing.css'
import './style/accordion.css'
import './style/join.css'
import './style/homepage.css'
import './style/tab.css'
import './style/contactnew.css'




function App() {
  return (
    <div className="App">
        <Scrolltop/>
          <Routes>  {/* Wrapping Routes inside Router */}
            <Route path="/services" element={<Layout><HomePage /></Layout>} /> {/* Define the route for HomePage */}
            <Route path="/company" element={<Layout><Company /></Layout>} /> {/* Define the route for HomePage */}
            <Route path="/blogs" element={<Layout><Blog /></Layout>} /> {/* Define the route for HomePage */}
            <Route path="/case-study" element={<Layout><Casestudy /></Layout>} /> {/* Define the route for HomePage */}
            <Route path="/careers" element={<Layout><Careers /></Layout>} /> {/* Define the route for HomePage */}
            <Route path="/contact-us" element={<Layout><Form /></Layout>} /> {/* Define the route for HomePage */}
            <Route path="/" element={<Layout><Homepage2 /></Layout>} /> {/* Define the route for HomePage */}
            <Route path="/contact_new" element={<Layout><Contactnew /></Layout>} /> {/* Define the route for HomePage */}
          </Routes>
        
      
    </div>
  );
}

export default App;