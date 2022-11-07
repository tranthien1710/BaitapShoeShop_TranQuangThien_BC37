import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { createStore, combineReducers } from "redux";
// import { Provider } from "react-redux" //duong dan kết nối store

// import categoryReducer from "./ex4/redux/categoryReducer"
// import productReducer from "./ex4/redux/productReducer"

// import catagoryReducer from "./ex4/redux1/catagoryReducer.js"
// //tao 1 cai store
// import { createStore, combineReducers } from "redux"
// const store = createStore(rootReducer);
// //tao5 duong dan tu7 store den ilement
// import { Provider } from "react-redux"
// <Provider store={store}>
//   <App />
// </Provider>
// //tao 1 cai rootreducer tong de quan ly cac reducer

// const rootReducer = combineReducers()

// import { createStore, combineReducers } from "redux"
// import { Provider } from "react-redux"

// const rootReducer = combineReducers({
//   category: productReducer,
// })

// const store = createStore(rootReducer);


{/* < Provider store={store} >
  <App />
</Provider > */}









// const rootReducer = combineReducers({
//   category: categoryReducer,
//   product: productReducer,
// })





// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
