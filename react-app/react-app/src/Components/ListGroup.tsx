
import { useState } from "react";

interface Props{
  items: string[];
  heading: string;
  onSelecteItem: (item: string) => void;
}

function ListGroup({items, heading, onSelecteItem}: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  

  return (
    
      <>
        <h1>heading</h1>
        {items.length === 0 &&  <p>No item found</p> }
        <ul className="list-group">
          {items.map((item, index) => (
            <li 
            className={ 
              selectedIndex === index ? "list-group-item active" 
              : "list-group-item"
            }
            key={item} 
           onClick={() =>{
            setSelectedIndex(index);
            onSelecteItem(item); 
          }}
            >{item}
            </li>
          ))}
        </ul>
      </>
  );
}

export default ListGroup;
