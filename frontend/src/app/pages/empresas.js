import "../css/empresas.css";

function Empresas() {
  return (
    <div className="empresas-content-box">
      <div className="header">
        <h2>Empresas</h2>
      </div>
      <div className="empresas-content-body">
        <table>
          <tr>
            <td>Identificação</td>
            <td>Cidade/UF</td>
            <td>CEP</td>
            <td>Data de abertura</td>
          </tr>
          <tr>
            <td>Facebook Inc.</td>
            <td>Curitiba/PR</td>
            <td>80.320-320</td>
            <td>08/2020</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Empresas;
