import React from 'react'


const Filter = () => {
    const filter = () => {
        
                const searching = document.getElementById('searching').value
                const countryName = document.querySelectorAll('.country-name')
                const hidden = document.getElementsByClassName('hidden')
                countryName.forEach((name) =>{
                    if (name.innerText.toLowerCase().includes(searching.toLowerCase())){
                       name.parentElement.parentElement.parentElement.style.display = 'block'
                    }
                    else if (searching.toLowerCase() !== name.innerText.toLowerCase()){
                        name.parentElement.parentElement.parentElement.style.display = 'none'
                
                     }
                    else{
                        name.parentElement.parentElement.parentElement.style.display = 'none'
                    }
                   
                })
              

    }

    return (
       <section className="Filter" >
     <form className="form-control">
         <input  type="search" name="search" id="searching"
         placeholder="search..."/>
         <input className="btn btn-outline-danger" type="button" onClick={filter} value="search" />
     </form>
     
       </section>
    )
}

export default Filter
