import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import './styles/main.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage.jsx';
import Layout from './components/Layout.jsx';
import routes from './routes/Routes.jsx';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: routes,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
