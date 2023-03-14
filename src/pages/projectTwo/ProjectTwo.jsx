import { useState } from 'react';
import NavbarHome from '../../NavbarHome';
import List from './showList';
import Alert from './Alert';
import './ProjectTwo.css';
import { v4 as uuidv4 } from 'uuid';

 function  ProjectTwo(){

    const [orderToDo,setOrder] = useState("")
    const [listToDo,setListToDo] = useState([])
    const [checklistToDo,setCheckListToDo] = useState(false)
    const [alert,setAlert] = useState({show:false,msg:'',type:''})
    const [checkEditItem,setCheckEditItem] = useState(false)
    const [editId,setEditId] = useState(null)
    const api = 'https://2c0udp772j.execute-api.ap-southeast-1.amazonaws.com/items'


    if(!checklistToDo){
        const respon = fetch(api)
        .then(res => res.json())
        .then(rows => {
            setListToDo(...listToDo,rows)
            console.log(rows);
        })
        setCheckListToDo(true)
        console.log(respon.status)
    }

    const submit_data= async (e)=>{
        e.preventDefault()
        console.log('save data -',orderToDo);
        if(!orderToDo){
                // แสดง Alert
                console.log('no data');
                setAlert({show:true,msg:"Please Input data :D",type:"error"})
        }else if(checkEditItem && orderToDo){
            //กระบวนการอัพเดตข้อมูลรายการที่ต้องการแก้ไข
            const result = listToDo.map((item)=>{
              if(item.uid === editId){
                const requestOptions = {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ uid:editId,List: orderToDo })
                };
                const respon = fetch(api, requestOptions)
                console.log(respon.status)
                return  {...item,List:orderToDo}
              } 
              return item
            })
            console.log('result edit :',result);
            setListToDo(result)
            setOrder('')
            setCheckEditItem(false)
            setEditId(null)
            setAlert({show:true,msg:"Edit Done!!",type:"success"})
        }else{    
            console.log('Add data');
            const newOrder= {
                uid:uuidv4(),
                List : orderToDo
            }
        setListToDo([...listToDo,newOrder])

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ uid:uuidv4(),List: orderToDo })
        };
        const respon = await fetch(api, requestOptions)
    
        console.log(respon.status)


        setOrder('')
        setAlert({show:true,msg:"Complete add data",type:"success"})

       
        }
    }

    const removeItem= async (uid)=>{
        console.log('remove data');
        const result = listToDo.filter((item)=>item.uid !== uid)
        setListToDo(result)
        const requestOptions = {
            method: 'DELETE'
        };
        const respon = await fetch(api+"/"+uid, requestOptions)
        console.log(respon.status)
        setAlert({show:true,msg:"Data has been removed!!",type:"error"})
    }
  
    const editItem= async (uid)=>{
        console.log('edit data');
        setCheckEditItem(true)
        setEditId(uid)
        const searchItem = listToDo.find((item)=>item.uid === uid)
        setOrder(searchItem.List)
    }

    

    return(
        <>
        <NavbarHome />
        
        <section className='container-projecttwo'>
            <h1>Todolist App</h1>
            {alert.show && <Alert {...alert} setAlert={setAlert} orderToDo={orderToDo}/>}
            <form className='form-group-projecttwo' onSubmit={submit_data}>
                <div className='form-control-projecttwo'>
                <input type='text' className='text-input-projecttwo' 
                onChange={(e)=>setOrder(e.target.value)}
                value = {orderToDo}
                />
                <button type='submit' className='submit-btn-projecttwo'>
                    {checkEditItem ? "Edit" : "Add"}
                    </button>
                </div>
            </form>
            <section className='list-container-projecttwo'>
                {listToDo.map((data,index)=>{
                  return <List key={index} {...data} removeItem={removeItem} editItem={editItem}/>
                })}
            </section>
        </section>
        </>
    )
}

export default ProjectTwo