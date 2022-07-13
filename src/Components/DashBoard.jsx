import { Routes, Route, Link } from "react-router-dom";

export const DashBoard = () => {
  return (
    <div className="col-2 bg-gray-dark d-flex align-items-center justify-content-center">
      <div className="dash-list w-75 text-center">
        <ul className="list-group gap-5">
        <Link className="list-group-item list-group-item-action shadow-box-3" to="nuevaempresa">EMP. NUEVAS</Link>
        <Link className="list-group-item list-group-item-action shadow-box-3" to="empresas">EMPRESAS</Link>
        <Link className="list-group-item list-group-item-action shadow-box-3" to="vendedores">VENDEDORES</Link>

        </ul>
      </div>
    </div>
  )
}
