import {Link} from 'react-router-dom';

export const Table = () => {
    return (
        <ul className='table list-group  table-default'>
            <li className=' list-group-item p-0 list-group-item-action d-flex text-white font-weight-bolder '>
            <span className='col-1 bg-gray-dark border-bottom border-right border-black'>N°</span>
            <span className='col-3 bg-gray-dark border-bottom border-right border-black'>RUC</span>
            <span className='col-8 bg-gray-dark border-bottom border-right border-black'>RAZON SOCIAL</span>
            
            </li>
            <li className=' list-group-item p-0 list-group-item-action d-flex'>
            <span className='col-1 bg-gray p-1 border-bottom border-right border-black modal-dialog-centered'>hola</span>
            <span className='col-3 bg-gray p-1 border-bottom border-right border-black modal-dialog-centered'>123</span>
            <span className='col-8 bg-gray d-flex justify-content-between border-bottom border-right border-black modal-dialog-centered'>PEPE BODEGERA.SA<Link to='complete' className='btn btn-danger rounded-1 m-1 p-1'>COMPLETAR</Link></span>
            </li>

        </ul>
    )
}
