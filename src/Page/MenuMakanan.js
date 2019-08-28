import React ,{Component} from "react"

import DaftarMakanan from "../Lib/DaftarMakanan"
import Header from "./Header"
class MenuMakanan extends Component {
  render() {
    return (
      <div>
      <Header />
      <h3>daftar makanan faforite</h3>

      <table>
        <tbody>
          <tr>
            {DaftarMakanan.map((data,index) => {
              return (
                <td key={index}>
                  <img src={data.img}
                  alt="product makanan"
                  width="150"
                  height="100"
                  />
                  <center>
                    <p>{data.NamaMakanan}</p>
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

export default MenuMakanan;
