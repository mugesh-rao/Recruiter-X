import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import MainHome from './components/pages/MainHome'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import UserDashboard from './components/pages/userdashboard'
import HrDashboard from './components/pages/HrDashboard'
import './App.css'

// import axios from "axios";

// const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

// export default function App() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(baseURL).then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//   if (!post) return null;

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//     </div>
//   );
// }

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ MainHome } />
                    <Route path="/login" component={ LoginPage } />
                    <Route path="/register" component={ RegisterPage } />
                    <Route path="/forget-password" component={ ForgetPasswordPage } />
                    <Route path="/HrDashboard" component={ HrDashboard } />

                    <Route path="/userdashboard" component={ UserDashboard } />
                </Switch>
                
            </div>
        </Router>
    )
}

