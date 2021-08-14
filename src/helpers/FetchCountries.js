import  { useEffect } from 'react'



const FetchCountries = (api, countrySearch , getCountries) => {
   let url
  if(countrySearch === 'all'){
    url = `${api}/${countrySearch}`
  }else if(countrySearch === 'africa'||countrySearch === 'americas' ||countrySearch === 'asia' ||countrySearch === 'europe' ||countrySearch === 'oceania'){
     url = `${api}/region/${countrySearch}`  
  }else {
    url = `${api}/name/${countrySearch}?fullText=true`
  }
  
  useEffect(() => {
       
       fetchApiCountries(url)
       .then(res=> getCountries(res))
  }, [countrySearch])

  const fetchApiCountries=async(api_url)=>{
    
    const res = await fetch(api_url)
    const data = await res.json()
   
    return data
  }

}
 
export default FetchCountries


