import {Link} from 'react-router-dom';
import { useFetch } from "../../Hooks/useFetch"
import { useLayoutEffect, useState } from "react";
import { TableItem2 } from './TableItem2';

export const Table2 = () => {


    const [Filter, setFilter] = useState([])

    const {Empresa} = useFetch ();

    useLayoutEffect(() => {

    const filter = Empresa.filter(({nuevo})=> nuevo===false);
    setFilter(filter);

    }, [Empresa])

    if(Empresa != 0){
    return (
        <ul className='table list-group  table-default '>
            <li className=' list-group-item p-0 d-flex text-white font-weight-bolder '>
            <span className='col-1 bg-gray-dark border-bottom border-right border-black'>N°</span>
            <span className='col-2 bg-gray-dark border-bottom border-right border-black'>RUC</span>
            <span className='col-4 bg-gray-dark border-bottom border-right border-black'>RAZON SOCIAL</span>
            <span className='col-1 bg-gray-dark border-bottom border-right border-black'>%</span>
            <span className='col-4 bg-gray-dark border-bottom border-right border-black'>ACTUALIZADO</span>
            
            </li>
            {Filter.map((empresa,index) => {
                    return <TableItem2 key={index} empresa={empresa} index={index}/>
                })}

        </ul>
    )}
    else{
        return <div className="row justify-content-center w-100">Loading...</div>}
}
