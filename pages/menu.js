import react,{useState} from "react"
import axios from "axios"

const Menu = () => {

    const [name,setUsername] = useState('') 
    const [price,setPassword] = useState('')
    const [menu,setMenu] = useState([])

    const [del,setDel] = useState('')

    const HandleUsername = (e) => {
        setUsername(e.target.value)
    }

    const HandlePassword = (e) => {
        setPassword(e.target.value)
    }

    

    const callAPI = () => {
        const url = 'http://localhost:5000/add_menu'
        const query = {
            params: {
                name:name,
                price:price
            }
        }

        axios.get(url,query)
            .then((result) => {

            })
            .catch((e) => {

            })
    }
    
    const goAPI = async() => {
        const url = 'http://localhost:5000/get_menu'
        await axios.get(url)
            .then((result) => {
                setMenu(result.data)
            })
            .catch((e) => {

            })
    }

    const deleteAPI = async(value) => {
        const url = 'http://localhost:5000/delete_menu'
        const query = {
            params: {
                menu_id:value
            }
        }
        await axios.get(url,query)
            .then((result) => {
                
            })
            .catch((e) => {

            })
    }

    console.log(menu)

    return(
        <div>
            Username <input type = "text" onChange={HandleUsername}></input>
            Password <input type = "text" onChange={HandlePassword}></input>
            <button onClick={callAPI}>เพิ่มเมนู</button>
            <button onClick={goAPI}>แสดงเมนู</button>
            <hr/>
            Username : {name}
            <br/>
            Password : {price}
            <br/>
            เมนูที่ลบคือ : {del}
            <div>
                {
                    menu.map((item) => {
                        return ( 
                            <div>
                                ชื่อ : {item.name} ราคา : {item.price} <button onClick={() => {deleteAPI(item._id)}}>ลบ</button>
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
    )
}


export default Menu

