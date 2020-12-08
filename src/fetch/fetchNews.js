const url = "http://localhost:8000";
const urlGETNews = `${url}/news`;

export async function getNews(){
    const response = await fetch(urlGETNews, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            // "x-access-token": localStorage.getItem('token')
            },
    })
    const data = response.json()
    return data
}