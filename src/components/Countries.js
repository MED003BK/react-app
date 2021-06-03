import React,{useState,useEffect} from 'react'
import'../App.css'
import './Header'
const url ='https://restcountries.eu/rest/v2/all'

const Countries = () => {

const [ Countries,setCountries] = useState ([])
const fetchCountryData = async () => {

        const Response =await fetch(url)
        console.log(Response);
        const countries = await Response.json()
        setCountries(countries)
        console.log(countries);
        
    }
useEffect(() => { 

    fetchCountryData ()
    
},[] )

return(
    <>
   <div className="grid">

   {Countries.map((country) =>{
        const { numircCode, name, population, region,capital,flag } = country

        return <article key={numircCode}> 
        <div>

            <img src={flag} alt={name} />


           <div className='details'>

           <h3>{name}</h3>
           <h4 className="country-name" > Name: <span>{name}</span></h4>
            <h4>population: <span>{population}</span></h4>
            <h4>region: <span>{region}</span> </h4>
            <h4>capital: <span>{capital}</span></h4>
            <button type="button" class="btn btn-info">favouris</button>
            <button type="button" class="btn btn-primary">more info</button>
           </div>


            
        </div>
         </article>
   })}
       
   </div>   
 

   </>
)

}

export default Countries