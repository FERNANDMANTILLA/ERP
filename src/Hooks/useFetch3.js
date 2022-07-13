import { useEffect, useState } from "react";
import { getData} from "../helpers/getData";


export const useFetch3 = (id) => {

    const [Usuario, setUsuario] =   useState([]);

    useEffect(() => {
        getData(id,"usuarios").then(({data}) => {
            setUsuario(data);
        }
        );
    
    }, [id]);

    return {
        Usuario,
        setUsuario,
    }

}
