import { useEffect, useState } from "react";
import { useFetch } from "./useFetch"

export const useForm = (initialForm = {},id = "") => {

  const { Empresa } = useFetch(id.toString());
  const [formState, setFormState] = useState(initialForm);

  const [Instalacion, setInstalacion] = useState({
    erp: "----",
    fibox: "----",
    acta: "----",
    acta_firmada: "----",
  });

  const [Maestros, setMaestros] = useState({
    acta: "----",
    acta_firmada: "----",
  });

  const [Reportes, setReportes] = useState({
        base_erp: "-",
        base_fibox: "-",
        acta: "-",
        acta_firmada: "-",
    }
  );

  const [Avisos, setAvisos] = useState({
    observaciones: "-",
    aviso1: "-",
    aviso2: "-",
    aviso3: "-",
    reunion: "-",
});

  const [CapaBasica, setCapaBasica] = useState({
    configuracion : "-",
    seguridad : "-",
    mantenimiento : "-",
    usuarios : "-",
    actas : "-",
    actas_firmadas : "-",
});


  useEffect(() => {
    setFormState(initialForm);
    setInstalacion({...Empresa.instalacion});
    setMaestros({...Empresa.maestros});
    setReportes({...Empresa.reportes});
    setAvisos({...Empresa.avisos});
    setCapaBasica({...Empresa.capa_basica});
   
  }, [Empresa]);


  const onResetForm = () => {
    setFormState(initialForm);
  }

  const onInputChange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

  const onInputChange2 = (e) => {
    setInstalacion({
      ...Instalacion,
      [e.target.name]: e.target.value,
    });

 
    
    
  };

  const onInputChange3 = (e) => {
    setMaestros({
      ...Maestros,
      [e.target.name]: e.target.value,
    });
   
  };

  const onInputChange5 = (e) => {
    setReportes({
      ...Reportes,
      [e.target.name]: e.target.value,
    });
    
  }

  const onInputChange6 = (e) => {
    setAvisos({
      ...Avisos,
      [e.target.name]: e.target.value,
    });
   
  }

  const onInputChange4 = (e) => {

    setCapaBasica({
      ...CapaBasica,
      [e.target.name]: e.target.value,
    });
    
   
  }



  const onFinalSubmit = () => {

    const data = {
      ...Empresa,
      instalacion: Instalacion,
      maestros: Maestros,
      reportes: Reportes,
      avisos: Avisos,
      capa_basica: CapaBasica,
  }
   

    return {data};
}

  return {
    ...formState,
    formState,
    setFormState,
    onInputChange,
    onResetForm,
    onInputChange2,
    onInputChange3,
    Instalacion,
    Maestros,
    onFinalSubmit,
    setInstalacion,
    setMaestros,
    onInputChange5,
    onInputChange6,
    onInputChange4,
    Reportes,
    Avisos,
    CapaBasica,
    setReportes,
    setAvisos,
    setCapaBasica,

  }
}
