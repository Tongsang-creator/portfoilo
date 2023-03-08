import { useEffect } from "react"

const Alert=({msg,type,setAlert,orderToDo})=>{

    console.log('Alert start',msg,type)
    useEffect(()=>{
        const timeOut = setTimeout(()=>{
            setAlert({show:false,msg:'',type:''})
        },1500)
        return()=>clearTimeout(timeOut)
        // eslint-disable-next-line
    },[orderToDo])

    console.log('Alert show data and return',msg,type)
    return(
        <p className={`alert ${type}-projecttwo`}>{msg}</p>
    )
}

export default Alert