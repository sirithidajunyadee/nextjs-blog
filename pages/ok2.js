import react,{useState} from "react"

const ok2 = () => {
    
    const [Title,setTitle] = useState('')
    const [TitleShow,setTitleShow] = useState('')
    const [Detail,setDetail] = useState('')
    const [DetailShow,setDetailShow] = useState('')
    

    const HandleTitle = (e) => {
        setTitle(e.target.value)
    }

    const HandleButton = () => {
        setTitleShow(Title)
        setDetailShow(Detail)
    }

    const HandleDetail = (e) => {
        setDetail(e.target.value)
    }

    return(
        <div>
            Title<input type = "text" onChange={HandleTitle}></input>
            Detail<input type = "text" onChange={HandleDetail}></input>
            <button onClick={HandleButton}>Click</button>
            <hr/>
            Title : {TitleShow}
            <br/>
            Detail : {DetailShow}

        </div>
    )

    }

export default ok2 
