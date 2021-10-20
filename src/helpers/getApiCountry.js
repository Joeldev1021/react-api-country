export async function getApiCountry(url, region){
   
   let res
  
   if(region === ''){
      res =await fetch(`${url}/all`)
   }else if(region === 'africa'||region === 'americas' ||region === 'asia' ||region === 'europe' ||region === 'oceania'){
      res =await fetch(`${url}/region/${region}`)
   }else {
      console.log(url, region)
      res = await fetch(`${url}/name/${region}?fullText=true`)
     
   }
   const json = await res.json()
   return json
 }
