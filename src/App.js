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
    <Router>
        <Layout>
            <Routes>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/contact' component={Contact}/>
                <Route exact path='/listings' component={Listings}/>
                <Route exact path='/listing/:id' component={ListingDetail}/>
                <Route exact path='/login' component={SignIn}/>
                <Route exact path='/signup' component={SignUp}/>
                <Route component={NotFound}/>
            </Routes>
        </Layout>
    </Router>
}

export default App;
