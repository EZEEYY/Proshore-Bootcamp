import React from "react";
import axios from "axios";
import { useGlobalContext } from "../Data";
function Third(){
    const {product,productup,original,originalup} = useGlobalContext()
    const [choice,choiceup] = React.useState()
    const [selectedProduct, SelectedProductup] = React.useState(null);

    console.log(product)
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
    function handleproduct(each){
        console.log(each)
        SelectedProductup(each)
    }
    const handleCloseOverlay = () => {
        SelectedProductup(null);
    };
    
    return(
        <div>
            <div>
                        <input onChange={event=>choiceup(event.target.value)}></input>
                    <table>
                        <tr>
                            <th>S.N</th>
                            <th>tittle</th>
                            <th>Price</th>
                            <th>Stock</th>
                        </tr>
                        {product.map((each)=>{return(
                        <tr >
                            <th>{each.id}</th>
                            <th onClick={()=>handleproduct(each)} className='product'>{each.title}</th>
                            <th>${each.price}</th>
                            <th>{each.stock}</th>
                        </tr>
                        )})}
                </table>
            </div>
            <div>

            {selectedProduct && (
                <div className="overlay" onClick={handleCloseOverlay}>
                    <div className="overlay-content">
                        <h2>{selectedProduct.title}</h2>
                        <img src={selectedProduct.thumbnail}></img>
                        <h3>Description:</h3>
                        <p>{selectedProduct.description}</p>

                    </div>
                </div>
            )}
            </div>
        </div>
    )
}
export default Third;
