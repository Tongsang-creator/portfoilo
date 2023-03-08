import { useState } from 'react';
import NavbarHome from '../../NavbarHome';
import List from './showList';
import Alert from './Alert';
import './ProjectTwo.css';
import { v4 as uuidv4 } from 'uuid';

function  ProjectTwo(){

    const [orderToDo,setOrder] = useState("")
    const [listToDo,setListToDo] = useState([])
    const [alert,setAlert] = useState({show:false,msg:'',type:''})
    const [checkEditItem,setCheckEditItem] = useState(false)
    const [editId,setEditId] = useState(null)
    const submit_data=(e)=>{
        e.preventDefault()
        console.log('save data -',orderToDo);
        if(!orderToDo){
                // แสดง Alert
                console.log('no data');
                setAlert({show:true,msg:"Please Input data :D",type:"error"})
        }else if(checkEditItem && orderToDo){
            //กระบวนการอัพเดตข้อมูลรายการที่ต้องการแก้ไข
            const result = listToDo.map((item)=>{
              if(item.id === editId){
                  return {...item,title:orderToDo}
              } 
              return item
            })
            setListToDo(result)
            setOrder('')
            setCheckEditItem(false)
            setEditId(null)
            setAlert({show:true,msg:"Edit Done!!",type:"success"})
        }else{    
            console.log('Add data');
            const newOrder= {
                id:uuidv4(),
                title : orderToDo
            }
        
        setListToDo([...listToDo,newOrder])
        setOrder('')
        setAlert({show:true,msg:"Complete add data",type:"success"})
        }
    }

    const removeItem=(id)=>{
        console.log('remove data');
        const result = listToDo.filter((item)=>item.id !== id)
        setListToDo(result)
        setAlert({show:true,msg:"Data has been removed!!",type:"error"})
    }
  
    const editItem=(id)=>{
        console.log('edit data');
        setCheckEditItem(true)
        setEditId(id)
        const searchItem = listToDo.find((item)=>item.id === id)
        setOrder(searchItem.title)
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