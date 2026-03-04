import { useEffect } from "react";

const KEY = "26867abd"
function MovieList (){

    useEffect(function(){
        async function fetchData(){
            const res = await fetch("http://www.omdbapi.com/?apikey=26867abd&t=Inception")
            const data = await res.json()
            console.log(data)
        }
        fetchData()
    }, [])
    return(
        <ul className="list-movies">
            <li style={{display : "flex", gap : "20px", width : "100%", borderBottom : "2px solid #ffff", padding : "10px"}}>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN-9OIbQ4ME8ddb7cHjMDr0VkCmJHd-Kxr7g&s" alt="Inception"></img>
                </div>
                <div>
                    <h3 style={{margin : 0}}>Inception</h3>
                    <p>Description of Inception</p>
                    <button 
                        style={{backgroundColor : "color-mix(in srgb, #ffffff, transparent 80% )", 
                        padding : "10px", 
                        borderRadius : "8px", 
                        fontSize : "18px",
                        width : "60px",
                        border : "2px solid #ffff",
                        color : "white"
                        }}
                    >
                        Add
                    </button>
                </div>
            </li>
        </ul>
    )
}

export default MovieList;