import { BiEdit,BiTrash } from 'react-icons/bi';

const showList =({id,title,removeItem})=>{


    return(
        <div className="list-item-projecttwo">
            <p className="title">{title}</p>
            <div className="button-container">
            <BiEdit   className="btn-projecttwo"/> 
            <BiTrash onClick={()=>removeItem(id)} className="btn-projecttwo"/>
            </div>  
        </div>
    )
}

export default showList 

/*
<BiEdit  onClick={()=>editItem(id)} className="btn-projecttwo"/> 
            <BiTrash onClick={()=>removeItem(id)} className="btn-projecttwo"/>
            */