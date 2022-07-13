import {Link} from 'react-router-dom';

const TableItem = ({empresa,index}) => {

  return (
    
    <li className=' list-group-item p-0 list-group-item-action d-flex'>
    <span className='col-1 bg-gray p-1 justify-content-center border-bottom border-right border-black modal-dialog-centered'>{index+1}</span>
    <span className='col-3 bg-gray p-1 justify-content-center border-bottom border-right border-black modal-dialog-centered'>{empresa.ruc}</span>
    <span className='col-8 bg-gray d-flex justify-content-between border-bottom border-right border-black modal-dialog-centered'>{empresa.razon_social}<Link to= {`/complete/${empresa.id}`} className='btn btn-cyan rounded-1 m-1 p-1'>COMPLETAR</Link></span>
    </li>
  )
}

export default TableItem
