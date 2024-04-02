import React from 'react';
import PathConstants from './PathConstants';

const HomePage = React.lazy(() => import('../pages/HomePage'));

const ProductsPage = React.lazy(() => import('../pages/ShowProductsPage'));
const AddProductPage = React.lazy(() => import('../pages/AddProductPage'));

const CategoriesPage = React.lazy(() => import('../pages/ShowCategoriesPage'));
const AddCategoryPage = React.lazy(() => import('../pages/AddCategoryPage'));

const routes = [
  { path: PathConstants.HOME, element: <HomePage /> },
  { path: PathConstants.SHOW_PRODUCTS, element: <ProductsPage /> },
  { path: PathConstants.ADD_PRODUCT, element: <AddProductPage /> },

  { path: PathConstants.SHOW_CATEGORIES, element: <CategoriesPage /> },
  { path: PathConstants.ADD_CATEGORY, element: <AddCategoryPage /> },
];

export default routes;
