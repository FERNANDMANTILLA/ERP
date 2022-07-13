
 const  getData = async (id="", entity="") => {
        const response = await fetch(`http://proyecto-erp.herokuapp.com/api/${entity}/${id}`);
        const data = await response.json();
        return { data } ;
}

const setData = async (id="", data, entity="") => {

        const response = await fetch(`http://proyecto-erp.herokuapp.com/api/${entity}/${id}`, {
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