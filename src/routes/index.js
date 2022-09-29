import Following from '../pages/Following/index';
import Upload from '../pages/Upload/index';
import Search from '../pages/Search/index';
import HeaderLayout from '../components/Layout/HeaderOnlyLayout';
import DashBoard from '../pages/DashBoard';

export const publicRouter = [
    { path: '/dashboard', component: DashBoard },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: HeaderLayout },
    { path: '/search', component: Search, layout: null },
];

export const privateRouter = [];
