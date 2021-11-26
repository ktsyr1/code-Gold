import { CloseX } from "component/icon";

const Close = (props) => {
    let close = () => document.querySelector(`.${props.data}`).style.display = 'none'

    return (
        <div className='close' >
            <div className='icon' onClick={close} >
                <CloseX />
            </div>
            <b>{props.title }</b>
        </div>
    );
}

export default Close