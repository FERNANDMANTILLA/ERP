
 const  getData = async (id) => {
        const response = await fetch(`http://proyecto-erp.herokuapp.com/api/empresas/${id}`);
        const data = await response.json();
        return { data } ;
}

const setData = async (id, data) => {

        const response = await fetch(`http://proyecto-erp.herokuapp.com/api/empresa/${id}`, {
                method: 'PUT',
                headers: {
                        'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
        });
      

}



export{
        getData,
        setData,

}