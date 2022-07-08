import react,{useState} from "react"
const Ok = () => {

    const [text,settext] = useState('text')
    
    let product = ['กระเป๋า,เสื้อ,กางเกง']

    const [products,setproducts] = useState(product)

    product.push ('ถุงมือ')
    

    const HandleButton = () => {
        product.push (text)
        setproducts([...products,text])
        //console.log (product)
    }
    
    const HandleText = (e) => {
        settext(e.target.value)
    }
    console.log(text)

    return (
        <div>{
            product.map((value) => {
                return <div>{value}</div>
            })   
        }
        

            
           
            <input type="text" onChange={HandleText} />
            <button onClick={HandleButton}>click</button>
            <div>{text}</div>
        </div>
    )
}
    export default Ok