import React, { Component } from 'react';
import Header from "../Page/Header"
import "../Style/Header.css"
class MenuHome extends Component {
 render() {
   return (
    <div>
      <Header />
      <br />

      <h1>
        <center>selamat datang di halaman utama masakan nusantara</center>

      </h1>
      <div className="image_header">
      <br />
      </div>
    </div>
   );
 }
}

export default MenuHome ;
