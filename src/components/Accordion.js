import React, {useState} from "react";

const Accordion = ({items}) =>{
    const [activeItem, SetActiveItem] = useState(null);
    const oncTitleClick = (index)=>{
        SetActiveItem(index);
    }
    const renderedList = items.map((item, index)=>{
        const active = index == activeItem ? "active": " ";
        return (
        <React.Fragment key={item.title}>
            <div className={`title ${active}`}
            onClick={() => oncTitleClick(index)}>
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className={`content ${active}`}>
                <p>{item.content}</p>
            </div>
        </React.Fragment>
        )
    })
    return (
        <div className="ui styled accordion">
            {renderedList}
        </div>
    )
}

export default Accordion