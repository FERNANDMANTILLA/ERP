
export const getData = () => {

    const getEmpresa = async () => {
  
        const response = await fetch('http://paolopgspring.herokuapp.com/api/emails');

        const data = await response.json();
        console.log(data);
    
    }


  return {getEmpresa,};
}
