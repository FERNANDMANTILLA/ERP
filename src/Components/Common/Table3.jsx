import React from 'react'
import { TableItem3 } from './TableItem3'

export const Table3 = ({Data = []}) => {


    return (
        <>
            <ul className='table list-group  table-default'>
                <li className=' list-group-item p-0 list-group-item-action d-flex text-white font-weight-bolder '>
                    <span className='col-1 bg-gray-dark border-bottom border-right border-black'>N°</span>
                    <span className='col-2 bg-gray-dark border-bottom border-right border-black'>DNI</span>
                    <span className='col-2 bg-gray-dark border-bottom border-right border-black'>NOMBRE</span>
                    <span className='col-3 bg-gray-dark border-bottom border-right border-black'>APELLIDO</span>
                    <span className='col-4 bg-gray-dark border-bottom border-right border-black'></span>
                </li>
                <TableItem3/>

            </ul>

        </>
    )
}
