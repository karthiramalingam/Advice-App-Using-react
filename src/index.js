import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { UserCard } from './UserCard';
import reportWebVitals from './reportWebVitals';
// import App from './App';
import { App1 } from './App1';
// import { AdviceApp } from './compoments/AdviceApp';
// import { UserDetais } from './compoments/UserDetais';
// import { UserDetails } from './compoments/UserDetails';
// import { RegFrm } from './compoments/RegFrm';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <UserCard/> */}
    {/* <Qrcode/> */}
    {/* <UserDetais/> */}
    {/* <UserDetails/> */}
    {/* <RegFrm/> */}
    {/* <AdviceApp/> */}
    <App1/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
