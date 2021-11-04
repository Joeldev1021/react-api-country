import { useEffect, useState } from "react"


const regionArray = ['africa',"americas",'asia', 'europe', 'oceania']

const useFetch = (keyword, statusSearch) => {
    
    let urlSearch = `https://restcountries.com/v3.1/all`
    const [data, setData] = useState([])
    const [isError, setIsError] = useState(false)
    const [isLoading , setisLoading] = useState(null)


    useEffect(()=> {
       if(!statusSearch){
        if(regionArray.includes(keyword)){
            urlSearch = `https://restcountries.com/v3.1/region/${keyword}`
        }else if(keyword){ 
            urlSearch = `https://restcountries.com/v2/alpha/${keyword}`
       }
       }else {
           urlSearch = `https://restcountries.com/v3.1/all`
       }
    }, [keyword || statusSearch])

  

    useEffect(() => {
      setisLoading(true)
      getDataCountry(urlSearch)
      .then((res)=> setData(res))
      .finally(()=> setisLoading(false))
      .catch(()=> setIsError(true))
    }, [keyword ||statusSearch])

    const getDataCountry =async(n)=> {
        console.log(n)
        const res = await fetch(n)
        return res.json()
    }

    return {isError, isLoading, data, setData}
}

export default useFetch
