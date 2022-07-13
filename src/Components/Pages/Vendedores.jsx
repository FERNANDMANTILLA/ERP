import React from "react";
import { Table3 } from "../Common/Table3";
import { useFetch2 } from "../../Hooks/useFetch2";

export const Vendedores = () => {

  const { Vendedor } = useFetch2();
  const Data = Vendedor;

  return (
    <>
      <div className="row justify-content-center w-100">
        <h3 className="bg-gray d-flex align-content-center justify-content-center w-75 mb-3">
          VENDEDORES
        </h3>

        <div className="input-group row w-75 mb-2">
            <button className="btn btn-success rounded-1">AGREGAR</button>
        </div>

        <div className=" row w-75 bg-gray">
          <Table3 Data={Data} />
        </div>
      </div>
    </>
  );
};
