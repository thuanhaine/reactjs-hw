
// import {OnlyComponents} from '../Layout'

import {Login, Signup} from '../component/login_register';
import { About, Contact, Books, Blog, Header, Home, Footer, QLUser, InforUser } from '../component';

const publichRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login, layout: null},
    { path: '/signup', component: Signup, layout: null},

]
const  privateRoutes = [
    { path: '/', component: Home },
    { path: '/header', component: Header },
    { path: '/footer', component: Footer },
    { path: '/about', component: About},
    { path: '/books', component: Books},
    { path: '/blog', component: Blog },
    { path: '/contact', component: Contact },
    { path: '/qluser', component: QLUser },
    { path: '/inforuser', component: InforUser },
]

export {publichRoutes, privateRoutes}