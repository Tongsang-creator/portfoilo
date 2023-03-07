import { useState } from 'react';
import NavbarHome from '../../NavbarHome';
import List from './showList';
import './ProjectTwo.css';
import { v4 as uuidv4 } from 'uuid';

function  ProjectTwo(){

    const [orderToDo,setOrder] = useState("")
    const [listToDo,setListToDo] = useState([])
    const submit_data=(e)=>{
        e.preventDefault()
        console.log('save data -',orderToDo);
        const newOrder= {
            id:uuidv4(),
            title : orderToDo
        }
        setListToDo([...listToDo,newOrder])
        setOrder('')
    }
/*
    const removeItem=(id)=>{
        const result = listToDo.filter((item)=>item.id !== id)
        setListToDo(result)
       // setAlert({show:true,msg:"ลบข้อมูลเรียบร้อย!",type:"error"})
    }
  /*
    const editItem=(id)=>{
        setCheckEditItem(true)
        setEditId(id)
        const searchItem = listToDo.find((item)=>item.id === id)
        setOrder(searchItem.title)
    }
*/
        //setAlert({show:true,msg:"บันทึกข้อมูลเรียบร้อย",type:"success"})

    return(
        <>
        <NavbarHome />
        <section className='container-projecttwo'>
            <h1>Todolist App</h1>
            <form className='form-group-projecttwo' onSubmit={submit_data}>
                <div className='form-control-projecttwo'>
                <input type='text' className='text-input-projecttwo' 
                onChange={(e)=>setOrder(e.target.value)}
                value = {orderToDo}
                />
                <button type='submit' className='submit-btn-projecttwo'>Add</button>
                </div>
            </form>
            <section className='list-container-projecttwo'>
                {listToDo.map((data,index)=>{
                  return <List key={index} {...data}/>
                })}
            </section>
        </section>
        </>
    )
}

export default ProjectTwo