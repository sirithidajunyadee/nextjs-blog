import react,{useState} from "react"
import axios from "axios"

const Member = () => {

    const [user,setUser] = useState('')
    const [pass,setPass] = useState('')
    const [member,setMember] = useState([])

    const [del,setDel] = useState('')


    const HandleUser = (e) => {
        setUser(e.target.value)
    }

    const HandlePass = (e) => {
        setPass(e.target.value)
    }

    const callAPI = () => {
        const url = 'http://localhost:5000/add_member'
        const query = {
            params: {
                user:user,
                pass:pass
            }
        }

        axios.get(url,query)
            .then((result) => {

            })
            .catch((e) => {

            })
    }

    const goAPI = async() => {
        const url = 'http://localhost:5000/get_member'
        await axios.get(url)
            .then((result) => {
                setMember(result.data)
            })
            .catch((e) => {

            })
    }

    const deleteAPI = async(value) => {
        const url = 'http://localhost:5000/delete_member'
        const query = {
            params: {
                member_id:value
            }
        }
        await axios.get(url,query)
            .then((result) => {
                
            })
            .catch((e) => {

            })
    }

    console.log(member)

    return(
        <div>
            Username <input type = "text" onChange={HandleUser}></input>
            Password <input type = "text" onChange={HandlePass}></input>
            <button onClick={callAPI}>เพิ่ม</button>
            <button onClick={goAPI}>แสดง</button>
            <hr/>
            Username : {user}
            <br/>
            Password : {pass}
            <br/>
            เมนูที่ลบคือ : {del}
            <div>
                {
                    member.map((item) => {
                        return ( 
                            <div>
                                ชื่อผู้ใช้ : {item.user} รหัสผ่าน : {item.pass} <button onClick={() => {deleteAPI(item._id)}}>ลบ</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        
        )

}
export default Member