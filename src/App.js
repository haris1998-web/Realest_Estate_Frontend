import './App.css';
import Layout from './hocs/Layout';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './containers/Home';
import Contact from './containers/Contact';
import About from './containers/About';
import ListingDetail from './containers/ListingDetail';
import Listings from './containers/Listings';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import NotFound from './components/NotFound';

import './sass/main.scss';

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route exact path='/' element={ <Home /> }/>
                    <Route exact path='/about' element={<About />} />
                    <Route exact path='/contact' element={<Contact />}/>
                    <Route exact path='/listings' element={<Listings />}/>
                    <Route exact path='/listing/:id' element={<ListingDetail />}/>
                    <Route exact path='/login' element={<SignIn />}/>
                    <Route exact path='/signup' element={<SignUp />}/>
                    <Route element={<NotFound/>}/>
                </Routes>
            </Layout>
        </Router>
    )
}

export default App;
