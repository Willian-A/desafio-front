import { A } from "hookrouter";

import HomeWorkOutlinedIcon from "@material-ui/icons/HomeWorkOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";

import "../css/home.css";

function Home() {
  return (
    <div className="content-box">
      <h2>Inicio</h2>
      <div className="content-body">
        <div className="card">
          <A href="/empresas">
            <HomeWorkOutlinedIcon />
            <h3>Listar Empresas</h3>
          </A>
        </div>
        <div className="card">
          <A href="/empresas">
            <StorefrontOutlinedIcon />
            <h3>Cadastrar Empresa</h3>
          </A>
        </div>
      </div>
    </div>
  );
}

export default Home;
