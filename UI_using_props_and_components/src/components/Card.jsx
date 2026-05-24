import { RiMailLine, RiFileEditLine } from "@remixicon/react";
const Card = (props) => {
  return (
    <div class="card">
        <span id="status">{props.status}</span>
        <span id="id">ID: {props.id}</span>
        <div class="img_box">
            <img src={props.image} alt={props.name} />
        </div>
        <h1>{props.name}</h1>
        <h5>{props.post}</h5>
        <div class="buttons">
            <div id="email"><RiMailLine /><button>Email</button></div>
            <div id="edit"><RiFileEditLine /><button>Edit</button></div>
        </div>
    </div>
  )
}

export default Card
