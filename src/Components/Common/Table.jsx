import { useLayoutEffect, useState } from "react";
import { useFetch } from "../../Hooks/useFetch"
import TableItem from "./TableItem";


export const Table =  () => {
    
    const [Filter, setFilter] = useState([])

    const {Empresa} = useFetch ();

    useLayoutEffect(() => {

    const filter = Empresa.filter(({nuevo})=> nuevo===true);
    setFilter(filter);

    }, [Empresa])



    if(Empresa != 0)
    {
        return (
            <ul className='table list-group  table-default'>
                <li className=' list-group-item p-0 list-group-item-action d-flex text-white font-weight-bolder '>
                <span className='col-1 bg-gray-dark border-bottom border-right border-black'>N°</span>
                <span className='col-3 bg-gray-dark border-bottom border-right border-black'>RUC</span>
                <span className='col-8 bg-gray-dark border-bottom border-right border-black'>RAZON SOCIAL</span>
                </li>  
                {Filter.map((empresa,index) => {
                    return <TableItem key={index} empresa={empresa} index={index}/>
                })}
            </ul>
        )
    }
    else{
        return <div className="row justify-content-center w-100">Loading...</div>
    }


}
