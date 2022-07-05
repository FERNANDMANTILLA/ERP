import {
  useParams
} from "react-router-dom";
import { useFetch } from "../../Hooks/useFetch"
import { useNavigate } from "react-router-dom";
import { useForm } from '../../Hooks/useForm'
import { useEffect,  useState } from "react";
import { setData } from "../../helpers/getData";


export const CreateEmpresa =  ()  => {

  const { id } = useParams();
  let navigate = useNavigate();

  const { Empresa } = useFetch(id.toString());

  const { formState,setFormState, onResetForm, onInputChange } = useForm({
    ...Empresa,
    id: id,
    nuevo: false,
  });

  const [modal, setModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  const handleSend = () => {
    setFormState(Empresa);
;
    setData(id,formState);
    navigate("/");
  }

  const goBack = () => {
    navigate("/");
  }

  useEffect(() => {
    setFormState({...Empresa, nuevo: false});
  }, [Empresa]);

  if (Empresa.razon_social) {
    return (
      <div className="d-flex flex-column justify-content-center w-75 align-items-center">
 
        <h3 className="bg-gray d-flex align-content-center justify-content-center w-100">DATOS</h3>
        <form action="" className="form-group  w-100" >
          <div className="input-group justify-content-end gap-4 mb-2 mt-2" >
            <button className="btn btn-danger rounded-1" onClick={handleSubmit} type="submit" data-toggle="modal" data-target="#modelId">ACEPTAR</button>
            <button className="btn btn-dark rounded-1" onClick={goBack}>CANCELAR</button>
          </div>

          <div className=" input-group d-flex flex-column bg-gray p-2 ">
            <p className="bg-dark p-1 text-center shadow-box-3 " >{Empresa.ruc}  -{Empresa.razon_social}</p>
            <div className="input-group mb-4  align-items-center" >
              <label htmlFor="" className="col-3 text-center">Giro de Empresa</label>
              <textarea id="giro_negocio" cols="1" rows="1" placeholder={Empresa.giro_negocio} onChange={onInputChange} className="form-control bg-gray-dark border-black border rounded-1 p-1 text-white  w-75  flex-none"></textarea>
            </div>
            <div className="input-group mb-4 align-items-center justify-content-evently" >
              <label htmlFor="" className="col-2 p-0 text-center">Fecha Inicio</label>
              <input required type="text" id="fecha_inicio" onChange={onInputChange} placeholder={Empresa.fecha_inicio} className="form-control bg-gray-dark border-black border rounded-1 p-1 text-white h-2 col-2 p-0" />
              <label htmlFor="" className="text-center">N° Empresa</label>
              <input required type="number" id="cant_empresas" onChange={onInputChange} placeholder={Empresa.cant_empresas} className="form-control bg-gray-dark border-black border rounded-1 p-1 text-white h-2 col-1 p-0" />
              <label htmlFor="" className="text-center">N° Usuarios</label>
              <input required type="number" id="cant_usuarios" onChange={onInputChange} placeholder={Empresa.cant_usuarios} className="form-control bg-gray-dark border-black border rounded-1 p-1 text-white h-2 col-1 p-0" />
            </div>
            <div className="input-group mb-4  align-items-center" >
              <label htmlFor="" className="col-3 text-center">Vendedor</label>
              <input required type="text" id="vendedor" onChange={onInputChange} placeholder="No Disponible" readOnly className="form-control bg-gray-dark border-black border rounded-1 p-1 text-white h-2 col-10" />
            </div>
            <div className="input-group mb-4  align-items-center" >
              <label htmlFor="" className="col-3 text-center">Lider</label>
              <input required type="text" id="lider" onChange={onInputChange} placeholder="No Disponible" readOnly   className="form-control bg-gray-dark border-black border rounded-1 p-1 text-white h-2 col-10" />
            </div>
            <div className="input-group mb-4  align-items-center" >
              <label htmlFor="" className="col-3 text-center ">Contacto</label>
              <input required type="text" id="contacto" onChange={onInputChange} placeholder="No Disponible" readOnly  className="form-control bg-gray-dark border-black border rounded-1 p-1 text-white h-2 col-10" />
            </div>
            <div className="input-group mb-4  align-items-center" >
              <label htmlFor="" className="col-3 text-center">Cargo</label>
              <input required type="text" id="cargo" onChange={onInputChange} placeholder={Empresa.cargo}  className="form-control bg-gray-dark border-black border rounded-1 p-1 text-white h-2 col-10" />
            </div>
            <div className="input-group mb-4  align-items-center" >
              <label htmlFor="" className="col-3 text-center">Celular</label>
              <input required type="number" id="celular" onChange={onInputChange} placeholder={Empresa.celular} className="form-control bg-gray-dark border-black border rounded-1 p-1 text-white h-2 col-10" />
              <label htmlFor="" className="col-3 text-center">Email</label>
              <input required type="email" id="correo" onChange={onInputChange} placeholder={Empresa.correo} className="form-control bg-gray-dark border-black border rounded-1 p-1 text-white h-2 col-10" />
            </div>
            <div className="input-group mb-4  align-items-center" >
              <label htmlFor="" className="col-3 text-center">Estado</label>
              <input required type="text" id="estado" onChange={onInputChange} placeholder={Empresa.estado} className="form-control bg-gray-dark border-black border rounded-1 p-1 text-white h-2 col-3" />
            </div>
          </div>
        </form>

        <div className="modal fade" id="modelId" tabIndex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">DATOS DE EMPRESA</h5>
                <button required type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
               ¿SEGURO EN GUARDAR?
              </div>
              <div className="modal-footer">
                <button required type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button required type="button" className="btn btn-success" onClick={handleSend} data-dismiss="modal">Save</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
    else {
    return <div>Loading...</div>
}



}
