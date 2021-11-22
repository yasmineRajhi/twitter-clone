import React from 'react';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import {Routes, Route} from 'react-router-dom';
import NewsFeed from './components/NewsFeed/NewsFeed';
import Authorise from './components/Authorise';
function MainRouter({setIsAuth,isAuth}) {
    return (
        <div>
            <Routes>
                <Route path="/home" element={<Authorise isAuth={isAuth}><NewsFeed /></Authorise>} isAuth />
                <Route path="/explore" element={<Authorise  isAuth={isAuth}><div>Home Explore</div></Authorise>} exact/>
                <Route path="/notifications" element={<Authorise  isAuth={isAuth}><div>Page Notifications</div></Authorise>} exact/>
                <Route path="/login" element={<Login setIsAuth={setIsAuth} />} exact/>
                <Route path="/signup" element={<SignUp />} exact/>
            </Routes>
        </div>
    )
}

export default MainRouter
