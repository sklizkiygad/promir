import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router";
import router from './router/index';
import store from './store/store'
import Provider from "react-redux/es/components/Provider";
import './style/style.css';
import './style/media.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
    </Provider>
);


