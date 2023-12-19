import './Buttons.css'



const Buttons = (props) => {
    return (  <div className="btn-wrapper">
    <button onClick={props.clearHolder} className="btn">
      Clear All
    </button>
    <button onClick={props.openAll} className="btn">
      All
    </button>
    <button onClick={props.openActive} className="btn">
      Active
    </button>
    <button onClick={props.openComplited} className="btn">
      Complited
    </button>
    <button onClick={props.clearComleted} className="btn">
      Clear complited
    </button>
  </div>);
}
 
export default Buttons;