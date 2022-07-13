import { useEffect, useState } from "react";
import { getData} from "../helpers/getData";


export const useFetch2 = (id) => {

    const [Vendedores, setVendedores] =   useState([]);

    useEffect(() => {
        getData(id,"vendedores").then(({data}) => {
            setVendedores(data);
        }
        );
    
    }, [id]);

    return {
        Vendedores,
        setVendedores,
    }

}
