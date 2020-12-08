const url = "http://localhost:8000"
const usersCheck = `${url}/userschecking`
const usersAdd = `${url}/usersadd`

// export async function getUser(){
//     const response = await fetch(UrlUser, {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//             "x-access-token": localStorage.getItem('token')
//             },
//     })
//     const data = response.json()
//     return data

// }

export async function signInFetch(User){
    const response = await fetch(usersCheck,{
        method: "POST",
        body: JSON.stringify(User),
        headers: {
            "Content-type": "application/json"  
        },
    })
    const data = await response.json()
    return data
}
export async function signUpFetch(User){
    const response = await fetch(usersAdd,{
        method: "POST",
        body: JSON.stringify(User),
        headers: {
            "Content-type": "application/json"  
        },
    })
    const data = await response.json()
    return data
}