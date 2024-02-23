export function BotMessage(props) {
  return (
    <div className="botBox">
      <div className="botMessage">
        <div>
          <img
            className="botImg"
            width="40"
            src="https://cdn-icons-png.flaticon.com/512/10061/10061872.png"
          />
        </div>
        <div className="text">{props.message}</div>
      </div>
    </div>
  );
}

export function ClientMessage(props) {
  return (
    <div className="clientBox">
      <div className="clientMessage">
        <div>
          <img
            className="botImg"
            width="40"
            src="https://i.ibb.co/YjsZM3B/man.png"
          />
        </div>
        <div className="text">
          {props.message}
        </div>
      </div>
    </div>
  );
}
