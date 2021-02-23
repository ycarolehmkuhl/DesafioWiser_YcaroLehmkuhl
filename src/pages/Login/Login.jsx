import React from 'react';
import UserLogin from 'components/User/Login/Login';
import Woman from "../../assets/mulher.jpg";

const PagesLogin = () => (
  <div style={{display:"flex"}}>
      <img className="login-image" src={Woman} alt="Imagem de uma mulher cheirando saco" />
      <UserLogin />
  </div>
);

export default PagesLogin;
