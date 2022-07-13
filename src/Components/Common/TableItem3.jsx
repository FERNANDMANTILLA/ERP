import React from 'react'

export const TableItem3 = () => {
    return (
        <li className=' list-group-item p-0 list-group-item-action d-flex text-white font-weight-bolder '>
            <span className='col-1 bg-gray p-1 justify-content-center border-bottom border-right border-black modal-dialog-centered'>1</span>
            <span className='col-2 bg-gray p-1 justify-content-center border-bottom border-right border-black modal-dialog-centered'>75308851</span>
            <span className='col-2 bg-gray p-1 justify-content-center border-bottom border-right border-black modal-dialog-centered'>PAOLO</span>
            <span className='col-3 bg-gray p-1 justify-content-center border-bottom border-right border-black modal-dialog-centered'>ZUÑIGA MALLQUI</span>
            <span className='col-4 bg-gray d-flex justify-content-evently border-bottom border-right border-black modal-dialog-centered'>
                <div className="input-group justify-content-evently">
                    <button className='btn btn-cyan rounded-1 m-1 p-1'>Editar</button>
                    <button className='btn btn-danger rounded-1 m-1 p-1'>Eliminar</button>
                </div>

            </span>
        </li>
    )
}
