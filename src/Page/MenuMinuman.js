import React ,{Component} from "react"

import DaftarMinuman from "../Lib/DaftarMinuman"
import Header from "./Header"
class MenuMinuman extends Component {
  render() {
    return (
      <div>
      <Header />
      <h3>daftar minuman faforite</h3>

      <table>
        <tbody>
          <tr>
            {DaftarMinuman.map((data,index) => {
              return (
                <td key={index}>
                  <img src={data.img}
                  alt="product makanan"
                  width="150"
                  height="100"
                  />
                  <center>
                    <p>{data.NamaMinuman}</p>
                    <p>harga : Rp.{data.Harga}</p>
                  </center>
                </td>
              );

            })}
            </tr>
        </tbody>
      </table>




        </div>
    );
  }
  }

export default MenuMinuman;
