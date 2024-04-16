async function fetcher(rqst) {
    try {
       const response = await fetch(rqst);
       if(response.ok) {
          return await response.json();
       }
 
 
       const message = await response.json();
       
       return message;
    } 
    catch (error) {
        console.log( error )
    }
 }