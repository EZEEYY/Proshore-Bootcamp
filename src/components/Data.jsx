import React from "react";

function Data(){
    const [person, personup] = React.useState([])
    const [name , nameup] = React.useState()
    const [age, ageup] = React.useState()
    function handlesubmit(event){
        event.preventDefault(); 
        personup([...person,{name,age}])
        console.log(person)
        nameup('')
        ageup('')
        console.log(person)
    }
    function filter(){
        const filteredperson = person.filter(per=>per.age>=30)
        personup(filteredperson)
    }
    return( 
        <div>
            <form onSubmit={handlesubmit}>

            <div>
            <div className='name'>
                <h1>Name</h1>
                <input type={Text} onChange={event => nameup(event.target.value)}></input>
            </div>
            <div className='age'> 
                <h1>Age</h1>
                <input  onChange={event => ageup(event.target.value)}></input>
            </div>
            <button type='submit'>ADD</button>
            </div>
            </form>
            <h1>Filter via Age more than 30</h1>
            <button onClick={filter}>filter</button>
            <div>
                {person.map((per=>{
                    return(
                        <li>Name: {per.name} , Age: {per.age}</li>
                    )
                }))}


            </div>
        </div>

    )
}
export default Data;