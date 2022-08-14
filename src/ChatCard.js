import React from "react";

function ChatCard(props) {
    return (
        <React.Fragment>
            <button className="btn form-control" onClick={()=>{props.changeFun({"image":props.link,"id":props.id,"name":props.name})}}>
                <div className="card">
                    <div className="card-body border-dark bg-light">
                        <div className="row align-items-center">
                            <div className="col-md-4">
                                <img src={props.link} className="rounded-circle" height="40"></img>
                            </div>
                            <div className="col-md-8" align="left">{props.name}</div>
                        </div>
                    </div>
                </div>
            </button>
        </React.Fragment>
    );
}
export default ChatCard;