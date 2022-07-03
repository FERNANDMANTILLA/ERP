
export const CreateEmpresa = () => {
  return (
    <div className="d-flex flex-column justify-content-center w-75 align-items-center">
      <h3 className="bg-gray d-flex align-content-center justify-content-center w-100">COMPLETAR DATOS</h3>
      <form action="" className="form-group  w-100"  >
        <div className="input-group justify-content-end gap-4 mb-2 mt-2" >
          <button className="btn btn-danger rounded-1">ACEPTAR</button>
          <button className="btn btn-dark rounded-1">CANCELAR</button>
        </div>
        <div className=" input-group d-flex flex-column bg-gray p-2 ">
          <p className="bg-dark p-1 text-center shadow-box-3 " >RUC - EMPRESA PEPITO SAC</p>
          <div className="input-group mb-4  align-items-center" >
            <label htmlFor="" className="col-3 text-center">Giro de Empresa</label>
            <textarea name="Giro" id="Giro" cols="1" rows="1" className="form-control bg-gray-dark border-black border rounded-1 p-1 text-white  w-75  flex-none"></textarea>
          </div>
          <div className="input-group mb-4 align-items-center justify-content-evently" >
            <label htmlFor="" className="col-2 p-0 text-center">Fecha Inicio</label>
            <input type="text" name="Fecha" id="Fecha" className="form-control bg-gray-dark border-black border rounded-1 p-1 text-white h-2 col-2 p-0" />
            <label htmlFor="empresa" className="text-center">N° Empresa</label>
            <input type="text" name="empresa" className="form-control bg-gray-dark border-black border rounded-1 p-1 text-white h-2 col-1 p-0" />
            <label htmlFor="empresa" name="usuario" className="text-center">N° Usuarios</label>
            <input type="text" className="form-control bg-gray-dark border-black border rounded-1 p-1 text-white h-2 col-1 p-0" />
          </div>
          <div className="input-group mb-4  align-items-center" >
            <label htmlFor="" className="col-3 text-center">Vendedor</label>
            <input type="text" name="vendedor" className="form-control bg-gray-dark border-black border rounded-1 p-1 text-white h-2 col-10" />
          </div>
          <div className="input-group mb-4  align-items-center" >
            <label htmlFor="" className="col-3 text-center">Lider</label>
            <input type="text" name="lider" className="form-control bg-gray-dark border-black border rounded-1 p-1 text-white h-2 col-10" />
          </div>
          <div className="input-group mb-4  align-items-center" >
            <label htmlFor="" className="col-3 text-center ">Contacto</label>
            <input type="text" name="contacto" className="form-control bg-gray-dark border-black border rounded-1 p-1 text-white h-2 col-10" />
          </div>
          <div className="input-group mb-4  align-items-center" >
            <label htmlFor="" className="col-3 text-center">Cargo</label>
            <input type="text" name="cargo" className="form-control bg-gray-dark border-black border rounded-1 p-1 text-white h-2 col-10" />
          </div>
          <div className="input-group mb-4  align-items-center" >
            <label htmlFor="" className="col-3 text-center">Celular</label>
            <input type="number" name="celular" className="form-control bg-gray-dark border-black border rounded-1 p-1 text-white h-2 col-10" />
            <label htmlFor="" className="col-3 text-center">Email</label>
            <input type="email" name="email" className="form-control bg-gray-dark border-black border rounded-1 p-1 text-white h-2 col-10" />
          </div>
          <div className="input-group mb-4  align-items-center" >
            <label htmlFor="" className="col-3 text-center">Estado</label>
            <input type="text" name="estado" className="form-control bg-gray-dark border-black border rounded-1 p-1 text-white h-2 col-3" />
          </div>
        </div>
      </form>
    </div>
  )
}
