import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const TableItem2 = ({ empresa, index }) => {

        let porcentaje=0,cc=0;

        const getPorcentaje = () =>{
            const object = Object.keys(empresa.instalacion);
            const object2 = Object.keys(empresa.maestros);
            const object3 = Object.keys(empresa.capa_basica);
            const object4 = Object.keys(empresa.reportes);
            const object5 = Object.keys(empresa.avisos);
            object.map(o => {
                if(empresa.instalacion[o] != "-"){
                    cc=cc+1;
                    porcentaje = (cc/21
                    )*100;
                }
        
            })

            object2.map(o => {
                if(empresa.maestros[o] != "-"){
                    cc=cc+1;
                    porcentaje = (cc/21
                    )*100;
                }
            })
            

            object3.map(o => {
                if(empresa.capa_basica[o] != "-"){
                    cc=cc+1;
                    porcentaje = (cc/21
                    )*100;
                }
            })

            object4.map(o => {
                if(empresa.reportes[o] != "-"){
                    cc=cc+1;
                    porcentaje = (cc/21
                    )*100;
                }
            }
            )

            object5.map(o => {
                if(empresa.avisos[o] != "-"){
                    cc=cc+1;
                    porcentaje = (cc/21
                    )*100;
                }
            }
            )


            porcentaje = Math.round(porcentaje);
        }
        
        useEffect(() => {
            getPorcentaje();
        }, [empresa,porcentaje])
        
        getPorcentaje();
        

    return (
        <li className=' list-group-item p-0 list-group-item-action d-flex'>
            <span className='col-1 bg-gray p-1 justify-content-center border-bottom border-right border-black modal-dialog-centered'>{index + 1}</span>
            <span className='col-2 bg-gray p-1 justify-content-center border-bottom border-right border-black modal-dialog-centered'>{empresa.ruc}</span>
            <span className='col-4 bg-gray p-1 justify-content-center border-bottom border-right border-black modal-dialog-centered'>{empresa.razon_social}</span>
            <span className='col-1 bg-gray p-1 justify-content-center border-bottom border-right border-black modal-dialog-centered'>{porcentaje}</span>
            <span className='col-4 bg-gray d-flex justify-content-evently border-bottom border-right border-black modal-dialog-centered'>{empresa.fecha}<Link to={`detalles/${empresa.id}`} className='btn btn-danger rounded-1 m-1 p-1'>DETALLES</Link></span>
        </li>
    )
}
