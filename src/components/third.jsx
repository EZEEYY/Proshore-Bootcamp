import React from "react";
import axios from "axios";
function Third(){
    const [product,productup] = React.useState([])
    const [original,originalup] = React.useState([])
    const [choice,choiceup] = React.useState()
    const Url ='https://dummyjson.com/products'
    React.useEffect(()=>{
        axios.get(Url).then((response)=>{
            productup(response.data.products)
            originalup(response.data.products)
        })
    },[])
    console.log(product)
    /*function filter(){
        const filtered = product.filter(item=>item.brand===choice)
        productup(filtered)
    }*/
    React.useEffect(() => {
        if (choice) {
            const filtered = product.filter((product) =>
            product.brand.toLowerCase().includes(choice.toLowerCase())
            );
            productup(filtered);
        } else {
            productup(original);
        }
        }, [choice, original]);
    function render(){
        productup(original)
    }
    
    return(
        <div>
            <div>
                        <input onChange={event=>choiceup(event.target.value)}></input>
                        <button >Search</button>
                        <button onClick={render}>Reset</button>
                    <table>
                        <tr>
                            <th>S.N</th>
                            <th>tittle</th>
                            <th>Price</th>
                            <th>Stock</th>
                        </tr>
                        {product.map((each)=>{return(
                        <tr>
                            <th>{each.id}</th>
                            <th>{each.title}</th>
                            <th>{each.price}</th>
                            <th>{each.stock}</th>
                        </tr>
                        )})}
                </table>
            </div>
        </div>
    )
}
export default Third;
