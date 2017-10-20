import Main from '../components/Main';
import Blog from '../components/Blog';

const routes = [
  {
    path: '/',
    exact: true,
    component: Main,
  },
  {
    path: '/blog',
    exact: true,
    component: Blog,
  },
];

export default routes;
