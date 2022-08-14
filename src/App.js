import { useEffect, useState } from "react";
import ChatCard from "./ChatCard";

function App() {
  const [currentChat, setCurrentChat]=useState({"image":"","id":"","name":""});
  return (
    <div>
      <div className="container-fluid h-100">
        <p></p>
        <div className="row">
          <div className="col-md-3  ">
            <div>
              <div className="card ">
                <div className="card-header bg-dark text-white" align="center">
                  <i className="fa-brands fa-rocketchat"></i> &nbsp;
                  <b>Chats</b>
                </div>
                <div className="card-body ">
                  {/* List of Chats */}
                  <ChatCard link="https://image.ibb.co/k0wVTm/profile_pic.jpg" id="1" name="Raguraj" changeFun={setCurrentChat}></ChatCard>
                  <ChatCard link="https://image.ibb.co/gSyTOb/bob_1.jpg" id="2" name="Bob" changeFun={setCurrentChat}></ChatCard>
                  <ChatCard link="https://image.ibb.co/jOzeUG/luke_1.jpg" id="3" name="Luke" changeFun={setCurrentChat}></ChatCard>
                  <ChatCard link="https://image.ibb.co/cBZPww/bane_1.jpg" id="4" name="Bane" changeFun={setCurrentChat}></ChatCard>
                </div>
              </div>

            </div>
          </div>

          <div className="col-md-9 ">
            <div className="card ">
              <div className="card-header bg-dark text-white ">
                <div className="row align-items-center">
                  <div className="col-md-1">
                    <img src={currentChat.image} className="rounded-circle"height="40"></img>
                  </div>
                  <div className="col-md-9 align-middle">{currentChat.name}</div>
                  <div className="col-md-1" align="right"><i className="fa-solid fa-video"></i></div>
                  <div className="col-md-1" align="left"><i className="fa-solid fa-phone"></i></div>
                </div>
              </div>
              <div className="card-body bg-light">
                {/* Chat Here */}
                {}
              </div>
              <div className="card-footer">
                <div className="row">
                  <div className="col-md-10"><input type="text" placeholder="Type Here" className="form-control"></input></div>
                  <div className="col-md-2"><a href="" className="btn form-control btn-success"><i className="fa-solid fa-paper-plane"></i></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
