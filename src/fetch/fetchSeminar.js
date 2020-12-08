const url = "http://localhost:8000";
const urlGETSeminars = `${url}/seminars`;
const urlPOSTSeminars = `${url}/seminarsadd`;
const urlDELSeminars = `${url}/seminars`;


export async function getSeminars(){
    const response = await fetch(urlGETSeminars, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            },
    })
    const data = response.json()
    return data
}

export async function getSeminarsId(id){
    const response = await fetch(`${urlGETSeminars}/${id}`, {
        params: id,
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            // "x-access-token": localStorage.getItem('token')
            },
    })
    const data = response.json()
    return data
}
