import { useEffect, useState } from "react";
import { getData} from "../helpers/getData";


 export const useFetch = (id = "" ) => {
    
    const [Empresa, setEmpresa] =   useState([]);

    useEffect(() => {
        getData(id).then(({data}) => {
            setEmpresa(data);
        }
        );
    
    }, [id]);

   

    


    return {
        Empresa,
        setEmpresa,
    }

}

