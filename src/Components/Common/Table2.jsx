import {Link} from 'react-router-dom';

export const Table2 = () => {
    return (
        <ul className='table list-group  table-default '>
            <li className=' list-group-item p-0 d-flex text-white font-weight-bolder '>
            <span className='col-1 bg-gray-dark border-bottom border-right border-black'>N°</span>
            <span className='col-2 bg-gray-dark border-bottom border-right border-black'>RUC</span>
            <span className='col-4 bg-gray-dark border-bottom border-right border-black'>RAZON SOCIAL</span>
            <span className='col-1 bg-gray-dark border-bottom border-right border-black'>%</span>
            <span className='col-4 bg-gray-dark border-bottom border-right border-black'>ACTUALIZADO</span>
            
            </li>
            <li className=' list-group-item p-0  d-flex'>
            <span className='col-1 bg-gray p-1  border-bottom border-right border-black modal-dialog-centered'>hola</span>
            <span className='col-2 bg-gray p-1 border-bottom border-right border-black modal-dialog-centered'>123</span>
            <span className='col-4 bg-gray p-1 border-bottom border-right border-black modal-dialog-centered'>asd</span>
            <span className='col-1 bg-gray p-1 border-bottom border-right border-black modal-dialog-centered'>asd</span>
            <span className='col-4 bg-gray d-flex justify-content-between border-bottom border-right border-black modal-dialog-centered'>FECHA<Link to='detalles' className='btn btn-danger rounded-2 p-1 m-1'>DETALLES</Link></span>
            </li>

        </ul>
    )
}
