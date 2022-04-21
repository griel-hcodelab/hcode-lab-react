import { Fragment } from "react";

const Contact = ()=>{

    return (
        <Fragment>

        <div className="column middle" style={{ backgroundColor: '#bbb' }}>
        <h1>Contact</h1>
        <form>
            <input type="text" />
            <button>Enviar</button>
        </form>
        </div>

        </Fragment>
    );

}

export default Contact;