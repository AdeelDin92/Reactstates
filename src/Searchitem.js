import { useState } from "react";


function Searchitem(props) {
    const [name,setName] = useState("");
    const [price,setPrice] = useState(0);
    const [type,setType] = useState("");
    const [brand,setBrand] = useState("");
    const Buttonpressed = () => {
        props.callback({name:name,price:price,type:type,brand:brand})
    }

    return(
        <div>
            <form>
                <label htmlFor="name-field">Name:</label>
                <input id="name-field" type="text" value={name} onChange={(e) => setName(e.target.value)}  />
                <label htmlFor="price-field">Max Price:</label>
                <input id="price-field" type="number" value={price}onChange={(e) => setPrice(e.target.value)} />
                <label htmlFor="type-field">Type :</label>
                <input id="type-field" type="text" value={type} onChange={(e) => setType(e.target.value)}/>
                <label htmlFor="Brand-field">Brand :</label>
                <input id="Brand-field" type="text"  value={brand} onChange={(e) => setBrand(e.target.value)}/>
                <button type="reset" onClick={Buttonpressed}>Search</button>
                <p>name:{name}</p>
                <p>price:{price}</p>
                <p>type:{type}</p>
                <p>brand:{brand}</p>
            </form>
        </div>
    )
}

export default Searchitem;