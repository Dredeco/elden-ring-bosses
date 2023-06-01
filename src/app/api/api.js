let limit = 50
let url = `https://eldenring.fanapis.com/api/bosses?limit=${limit}`


export default async function getData() {
    let bossesData = null

    await fetch (url)
    .then((response) => response.json())
    .then((json) => bossesData = json.data)

    return bossesData
}