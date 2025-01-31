import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PersonalAccount from "../pages/Account";
import AddPost from "../pages/AddPost";
import Blog from "../pages/Blog";

const routes = [
    {
        path: '/',
        component: Home,
        isProtected: false,
    },
    {
        path: '/login',
        component: Login,
        isProtected: false,
    },
    {
        path: '/register',
        component: Register,
        isProtected: false,
    },
    {
        path: '/blog',
        component: Blog,
        isProtected: true,
    },
    {
        path: '/profile',
        component: PersonalAccount,
        isProtected: true,
    },
    {
        path: '/addPost',
        component: AddPost,
        isProtected: true,
    }
];

export default routes;
