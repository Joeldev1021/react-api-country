export default async function fetchApiCountries(api){
    const res = await fetch(api)
    const data = await res.json()
    return data
  }
