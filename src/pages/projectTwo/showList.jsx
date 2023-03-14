import { BiEdit,BiTrash } from 'react-icons/bi';

const showList =({uid,List,removeItem,editItem})=>{


    return(
        <div className="list-item-projecttwo">
            <p className="title">{List}</p>
            <div className="button-container">
            <BiEdit  onClick={()=>editItem(uid)} className="btn-projecttwo"/> 
            <BiTrash onClick={()=>removeItem(uid)} className="btn-projecttwo"/>
            </div>  
        </div>
    )
}

export default showList 
