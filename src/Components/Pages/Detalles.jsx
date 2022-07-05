import { useEffect, useLayoutEffect, useMemo } from "react";
import { DetallesHelper } from "../../helpers/DetallesHelper";
import { useForm } from '../../Hooks/useForm'
import { useNavigate } from "react-router-dom";
import {useParams} from "react-router-dom";
import { setData } from "../../helpers/getData";
import { Link } from 'react-router-dom';


export const Detalles = () => {
    let navigate = useNavigate();
    const { id } = useParams();

    const { checkData,
        handleChange, handleChange2, handleChange3,handleChange4,handleChange5,
        Empresa,
        instalacion, maestros, capa_basica,reportes,avisos 
    } = DetallesHelper();

    const { formState, setFormState, onInputChange2, onInputChange3,onInputChange4,onInputChange5,onInputChange6,onFinalSubmit } = useForm({ ...Empresa },id);
    const object = Object.keys(instalacion);
    const object2 = Object.keys(maestros);
    const object3 = Object.keys(capa_basica);
    const object4 = Object.keys(reportes);
    const object5 = Object.keys(avisos);

    useLayoutEffect(() => {
        checkData(object, instalacion, "instalacion");
        checkData(object2, maestros, "maestros");
        checkData(object3, capa_basica, "capa_basica");
        checkData(object4, reportes, "reportes");
        checkData(object5, avisos, "avisos");

    }, [Empresa]);

    const handleSubmit = (e) => {
        e.preventDefault();
    
      }

      const goBack = (e) => {
        e.preventDefault();
        navigate("/empresas");
   
      }

      const printUpdate  = (e) => {
        e.preventDefault();
        const {data} = onFinalSubmit();
        setData(id,data);
        navigate("/");
        }


    const setInput = (o, k) => {
        if (o != "-") {
            return <div className="col-11 grid justify-items-end">
                <input type="text"
                    name={k}
                    className="form-control bg-gray-dark border-black border rounded-1 p-1 text-white h-2 w-10  text-right"
                    defaultValue={o}
                    onChange={onInputChange2}
                /></div>
        }
        else
            return <p className="m-0 col-11 pt-1 pb-1 text-right text-white">-</p>
    }
    
    const setInput2 = (o, k) => {
        if (o != "-") {
            return <div className="col-11 grid justify-items-end">
                <input type="text"
                    name={k}
                    className="form-control bg-gray-dark border-black border rounded-1 p-1 text-white h-2 w-10  text-right"
                    defaultValue={o}
                    onChange={onInputChange3}
                /></div>
        }
        else
            return <p className="m-0 col-11 pt-1 pb-1 text-right text-white">-</p>
    }

    const setInput3 = (o, k) => {
        
        if (o != "-") {
            return <div className="col-11 grid justify-items-end">
                <input type="text"
                    name={k}
                    className="form-control bg-gray-dark border-black border rounded-1 p-1 text-white h-2 w-10  text-right"
                    defaultValue={o}
                    onChange={onInputChange4}
                /></div>
        }
        else
            return <p className="m-0 col-11 pt-1 pb-1 text-right text-white">-</p>
    }

    const setInput4 = (o, k) => {
        if (o != "-") {
            return <div className="col-11 grid justify-items-end">
                <input type="text"
                    name={k}
                    className="form-control bg-gray-dark border-black border rounded-1 p-1 text-white h-2 w-10  text-right"
                    defaultValue={o}
                    onChange={onInputChange5}
                /></div>
        }
        else
            return <p className="m-0 col-11 pt-1 pb-1 text-right text-white">-</p>
    }

    const setInput5 = (o, k) =>  {
        if (o != "-") {
            return <div className="col-11 grid justify-items-end">
                <input type="text"
                    name={k}
                    className="form-control bg-gray-dark border-black border rounded-1 p-1 text-white h-2 w-10  text-right"
                    defaultValue={o}
                    onChange={onInputChange6}
                /></div>
        }
        else
            return <p className="m-0 col-11 pt-1 pb-1 text-right text-white">-</p>
    }
    if (Empresa.razon_social) {
        return (
            <div className="d-flex flex-column justify-content-center w-75 align-items-center ">
                <h3 className="bg-gray d-flex align-content-center justify-content-center w-100">DETALLES ENTREGABLES</h3>
                <div className="input-group justify-content-end gap-4 mb-2 mt-2" >
                        <button className="btn btn-danger rounded-1" type="submit" onClick={handleSubmit} data-toggle="modal" data-target="#modelId">ACEPTAR</button>
                        <button className="btn btn-dark rounded-1" onClick={goBack} >VOLVER</button>
                        <Link to= {`/complete/${id}`} className='btn btn-info rounded-1'>EDITAR</Link>
                    </div>
                <form action="" className="form-group  w-100 panel"  >
              

                    <div className=" input-group d-flex flex-column bg-gray p-2 ">
                        <h6 className=" d-flex align-content-center justify-content-center w-100">{Empresa.ruc} - {Empresa.razon_social}</h6>
                        <p className=" p-1 text-center bg-gray-dark shadow-box-3">INSTALACION</p>
                        <div className="input-group-text p-2  align-items-center" >
                            <input type="checkbox" name="erp" id="instalacion_erp" onChange={handleChange} value={Empresa.instalacion.erp} />
                            <p className="m-0 col-1">ERP</p>
                            {setInput(instalacion.erp, "erp")}
                        </div>
                        <div className="input-group-text p-2  align-items-center" >
                            <input type="checkbox" name="fibox" id="instalacion_fibox" onChange={handleChange} value={Empresa.instalacion.fibox} />
                            <p className="m-0 col-1">FIBOX</p>
                            {setInput(instalacion.fibox, "fibox")}
                        </div>
                        <div className="input-group-text p-2  align-items-center" >
                            <input type="checkbox" name="acta" id="instalacion_acta" onChange={handleChange} value={Empresa.instalacion.acta} />
                            <p className="m-0 col-1">ACTA</p>
                            {setInput(instalacion.acta, "acta")}
                        </div>
                        <div className="input-group-text p-2  align-items-center" >
                            <input type="checkbox" name="acta_firmada" id="instalacion_acta_firmada" onChange={handleChange} value={Empresa.instalacion.acta_firmada} />
                            <p className="m-0 col-1">ACTA FIRMADA</p>
                            {setInput(instalacion.acta_firmada, "acta_firmada")}
                        </div>
                    </div>
                    <div className=" input-group d-flex flex-column bg-gray p-2 ">
                        <p className=" p-1 text-center bg-gray-dark shadow-box-3">MAESTROS</p>
                        <div className="input-group-text p-2  align-items-center" >
                            <input type="checkbox" name="acta" id="maestros_acta" onChange={handleChange2} value={Empresa.maestros.acta} />
                            <p className="m-0 col-1">ACTA</p>
                            {setInput2(maestros.acta, "acta")}
                        </div>
                        <div className="input-group-text p-2  align-items-center" >
                            <input type="checkbox" name="acta_firmada" id="maestros_acta_firmada" onChange={handleChange2} value={Empresa.maestros.acta_firmada} />
                            <p className="m-0 col-1">ACTA FIRMADA</p>
                            {setInput2(maestros.acta_firmada, "acta_firmada")}
                        </div>
                    </div>

                    <div className=" input-group d-flex flex-column bg-gray p-2 ">
                        <p className=" p-1 text-center bg-gray-dark shadow-box-3">CAPA BASICA</p>
                        <div className="input-group-text p-2  align-items-center" >
                            <input type="checkbox" name="configuracion" id="capa_basica_configuracion" onChange={handleChange3}  />
                            <p className="m-0 col-1">CONFIGURACION</p>
                            {setInput3(capa_basica.configuracion, "configuracion")}
                        </div>
                        <div className="input-group-text p-2  align-items-center" >
                            <input type="checkbox" name="seguridad" id="capa_basica_seguridad" onChange={handleChange3}  />
                            <p className="m-0 col-1">SEGURIDAD</p>
                            {setInput3(capa_basica.seguridad, "seguridad")}
                        </div>
                        <div className="input-group-text p-2  align-items-center" >
                            <input type="checkbox" name="mantenimiento" id="capa_basica_mantenimiento" onChange={handleChange3}  />
                            <p className="m-0 col-1">MANTENIMIENTO</p>
                            {setInput3(capa_basica.mantenimiento, "mantenimiento")}
                        </div>
                        <div className="input-group-text p-2  align-items-center" >
                            <input type="checkbox" name="usuarios" id="capa_basica_usuarios" onChange={handleChange3}  />
                            <p className="m-0 col-1">USUARIOS</p>
                            {setInput3(capa_basica.usuarios, "usuarios")}
                        </div>
                        <div className="input-group-text p-2  align-items-center" >
                            <input type="checkbox" name="actas" id="capa_basica_actas" onChange={handleChange3} />
                            <p className="m-0 col-1">ACTA</p>
                            {setInput3(capa_basica.actas, "actas")}
                        </div>
                        <div className="input-group-text p-2  align-items-center" >
                            <input type="checkbox" name="actas_firmadas" id="capa_basica_actas_firmadas" onChange={handleChange3} />
                            <p className="m-0 col-1">ACTA FIRMADA</p>
                            {setInput3(capa_basica.actas_firmadas, "actas_firmadas")}
                        </div>
                    </div>

                    <div className=" input-group d-flex flex-column bg-gray p-2 ">
                        <p className=" p-1 text-center bg-gray-dark shadow-box-3">REPORTES</p>
                        <div className="input-group-text p-2  align-items-center" >
                            <input type="checkbox" name="base_erp" id="reportes_base_erp" onChange={handleChange4}  />
                            <p className="m-0 col-1">BASE ERP</p>
                            {setInput4(reportes.base_erp, "base_erp")}
                        </div>
                        <div className="input-group-text p-2  align-items-center" >
                            <input type="checkbox" name="base_fibox" id="reportes_base_fibox" onChange={handleChange4} />
                            <p className="m-0 col-1">BASE FIBOX</p>
                            {setInput4(reportes.base_fibox, "base_fibox")}
                        </div>
                        <div className="input-group-text p-2  align-items-center" >
                            <input type="checkbox" name="acta" id="reportes_acta" onChange={handleChange4}  />
                            <p className="m-0 col-1">ACTA</p>
                            {setInput4(reportes.acta, "acta")}
                        </div>
                        <div className="input-group-text p-2  align-items-center" >
                            <input type="checkbox" name="acta_firmada" id="reportes_acta_firmada" onChange={handleChange4}  />
                            <p className="m-0 col-1">ACTA FIRMADA</p>
                            {setInput4(reportes.acta_firmada, "acta_firmada")}
                        </div>
                    </div>

                    <div className=" input-group d-flex flex-column bg-gray p-2 ">
                        <p className=" p-1 text-center bg-gray-dark shadow-box-3">AVISOS</p>
                        <div className="input-group-text p-2  align-items-center" >
                            <input type="checkbox" name="observaciones" id="avisos_observaciones" onChange={handleChange5} value={Empresa.maestros.acta} />
                            <p className="m-0 col-1">OBSERVACIONES</p>
                            {setInput5(avisos.observaciones, "observaciones")}
                        </div>
                        <div className="input-group-text p-2  align-items-center" >
                            <input type="checkbox" name="aviso1" id="avisos_aviso1" onChange={handleChange5} value={Empresa.maestros.acta_firmada} />
                            <p className="m-0 col-1">AVISO 1</p>
                            {setInput5(avisos.aviso1, "aviso1")}
                        </div>
                        <div className="input-group-text p-2  align-items-center" >
                            <input type="checkbox" name="aviso2" id="avisos_aviso2" onChange={handleChange5} value={Empresa.maestros.acta_firmada} />
                            <p className="m-0 col-1">AVISO 2</p>
                            {setInput5(avisos.aviso2, "aviso2")}
                        </div>
                        <div className="input-group-text p-2  align-items-center" >
                            <input type="checkbox" name="aviso3" id="avisos_aviso3" onChange={handleChange5} value={Empresa.maestros.acta_firmada} />
                            <p className="m-0 col-1">AVISO 3</p>
                            {setInput5(avisos.aviso3, "aviso3")}
                        </div>
                        <div className="input-group-text p-2  align-items-center" >
                            <input type="checkbox" name="reunion" id="avisos_reunion" onChange={handleChange5} value={Empresa.maestros.acta_firmada} />
                            <p className="m-0 col-1">REUNION</p>
                            {setInput5(avisos.reunion, "reunion")}
                        </div>
                    </div>
                </form>

                <div className="modal fade" id="modelId"  role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">ENTREGABLES</h5>
                                <button required type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                ¿SEGURO EN GUARDAR?
                            </div>
                            <div className="modal-footer">
                                <button required type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button required type="button" className="btn btn-success" onClick={printUpdate} data-dismiss="modal">Save</button>
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
