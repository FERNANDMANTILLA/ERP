

import { useFetch } from "../Hooks/useFetch"
import {getDate} from './getDate';
import { useParams} from "react-router-dom";
import { useForm } from "../Hooks/useForm";

export const DetallesHelper = () => {
    
    const { id } = useParams();
    const { Empresa, setEmpresa } = useFetch(id.toString());
    const { time } = getDate();
    const { instalacion = [], maestros = [], reportes= [],avisos= [], capa_basica=[] } = Empresa;
    const {Instalacion, setInstalacion,Maestros, setMaestros,CapaBasica, setCapaBasica,Reportes, setReportes,Avisos, setAvisos,
        
        onFinalSubmit} = useForm (Empresa,id);
    
    const checkData = (o, t, object) => {
        o.map((key) => {
           
            if (t) {
                
                if(t[key] != "-"){
                 document.getElementById(object+"_"+key).checked = true;
                }
                else{
                  document.getElementById(object+"_"+key).checked = false;
                }

            }
 

        });
    }


    const handleChange = (e) => {
        
        if (e.target.checked){
            setEmpresa({ ...Empresa, instalacion: { ...instalacion, [e.target.name]: "" }});
            setInstalacion({
                ...Instalacion,
                [e.target.name]: ""
            });
            onFinalSubmit();
        }
        else {
            setEmpresa({ ...Empresa, instalacion: { ...instalacion, [e.target.name]: "-" }});
            setInstalacion({
                ...Instalacion,
                [e.target.name]: "-"
            });
            onFinalSubmit();
        }
    }

    const handleChange2 = (e) => {

        if (e.target.checked){
            setEmpresa({ ...Empresa, maestros: { ...maestros, [e.target.name]: "" }});
            setMaestros({
                ...Maestros,
                [e.target.name]: ""
            });
            onFinalSubmit();
        }
        else {
            setEmpresa({ ...Empresa, maestros: { ...maestros, [e.target.name]: "-" }});
            setMaestros({
                ...Maestros,
                [e.target.name]: "-"
            });
        
        }
    }

    const handleChange3 = (e) => {

        if (e.target.checked){
            setEmpresa({ ...Empresa, capa_basica: { ...capa_basica, [e.target.name]: "" }});
            setCapaBasica({
                ...CapaBasica,
                [e.target.name]: "-"
            });
            
        }
        else {
            setEmpresa({ ...Empresa, capa_basica: { ...capa_basica, [e.target.name]: "-" }});
            setCapaBasica({
                ...CapaBasica,
                [e.target.name]: "-"
            });
        
        }
    }

    const handleChange4 = (e) => {
        
        if (e.target.checked){
            setEmpresa({ ...Empresa, reportes: { ...reportes, [e.target.name]: "" }});
            setReportes({
                ...Reportes,
                [e.target.name]: ""
            });
            onFinalSubmit();
        }
        else {
            setEmpresa({ ...Empresa, reportes: { ...reportes, [e.target.name]: "-" }});
            setReportes({
                ...Reportes,
                [e.target.name]: "-"
            });
        
        }

   
    }

    const handleChange5 = (e) => {

        if (e.target.checked){
            setEmpresa({ ...Empresa, avisos: { ...avisos, [e.target.name]: "" }});
            setAvisos({
                ...Avisos,
                [e.target.name]: ""
            });
            onFinalSubmit();
        }
        else {
            setEmpresa({ ...Empresa, avisos: { ...avisos, [e.target.name]: "-" }});
            setAvisos({
                ...Avisos,
                [e.target.name]: "-"
            });
        
        }
    }
    
  return {checkData,handleChange,handleChange2,Empresa,instalacion,maestros,
    reportes,avisos,capa_basica,handleChange3,handleChange4,handleChange5,time};
}
