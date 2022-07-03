
export const Detalles = () => {
    return (
        <div className="d-flex flex-column justify-content-center w-75 align-items-center">
            <h3 className="bg-gray d-flex align-content-center justify-content-center w-100">DETALLES ENTREGABLES</h3>
            <form action="" className="form-group  w-100"  >
                <div className="input-group justify-content-end gap-4 mb-2 mt-2" >
                    <button className="btn btn-danger rounded-1">ACEPTAR</button>
                    <button className="btn btn-dark rounded-1">CANCELAR</button>
                </div>
                <div className=" input-group d-flex flex-column bg-gray p-2 ">
                    <p className=" p-1 text-center bg-gray-dark shadow-box-3">INSTALACION</p>
                    <div className="input-group-text p-2  align-items-center" >
                        <input type="checkbox" /> <p className="m-0 col-1">ERP</p> <p className="m-0 col-11 text-right">FECHA</p>
                    </div>
                    <div className="input-group-text p-2  align-items-center" >
                        <input type="checkbox" /> <p className="m-0 col-1">FIBOX</p> <p className="m-0 col-11 text-right">FECHA</p>
                    </div>
                    <div className="input-group-text p-2  align-items-center" >
                        <input type="checkbox" /> <p className="m-0 col-1">ACTA</p> <p className="m-0 col-11 text-right">FECHA</p>
                    </div>
                    <div className="input-group-text p-2  align-items-center" >
                        <input type="checkbox" /> <p className="m-0 col-1">ACTA FIRMADA</p> <p className="m-0 col-11 text-right">FECHA</p>
                    </div>
                </div>
                <div className=" input-group d-flex flex-column bg-gray p-2 ">
                    <p className=" p-1 text-center bg-gray-dark shadow-box-3">MAESTROS</p>
                    <div className="input-group-text p-2  align-items-center" >
                        <input type="checkbox" /> <p className="m-0 col-1">ACTA</p> <p className="m-0 col-11 text-right">FECHA</p>
                    </div>
                    <div className="input-group-text p-2  align-items-center" >
                        <input type="checkbox" /> <p className="m-0 col-1">ACTA FIRMADA</p> <p className="m-0 col-11 text-right">FECHA</p>
                    </div>
                </div>
            </form>
        </div>
    )
}
