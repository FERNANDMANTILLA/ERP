import { Table } from "../Common/Table"

export const NuevaEmpresa = () => {
  return (
    <>
    <div className="row justify-content-center w-100">
        <h3 className="bg-gray d-flex align-content-center justify-content-center w-75 mb-3">EMPRESAS NUEVAS</h3>
        <div className=" row w-75 bg-gray">
            <Table />
            
        </div>
    </div>
    </>
  )
}
