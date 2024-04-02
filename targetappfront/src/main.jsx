import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage.jsx';
import Layout from './components/Layout.jsx';
import ShowProductsPage from './pages/ShowProductsPage.jsx';
import AddProductPage from './pages/AddProductPage.jsx';
import ShowCategoriesPage from './pages/ShowCategoriesPage.jsx';
import AddCategoryPage from './pages/AddCategoryPage.jsx';
import HomePage from './pages/HomePage.jsx';
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
