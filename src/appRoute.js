import React from "react";
import { BrowserRouter , Route} from "react-router-dom";
import App from "./App.js"
import MenuMakanan from "./Page/MenuMakanan"
import MenuMinuman from "./Page/MenuMinuman"
import Kontak from "./Page/Kontak"
import MenuHome from "./Page/MenuHome"

const AppRoute = () =>(
  <BrowserRouter >

  <div>
    <Route path="/" exact component={App} />
    <Route path="/menu_makanan"  component={MenuMakanan}/>
    <Route path="/menu_minuman" component={MenuMinuman}/>
    <Route path="/kontak" component={Kontak}/>
    <Route path="/menu_home" component={MenuHome}/>
  </div>

  </BrowserRouter>
)

export default AppRoute;
