import {Fragment} from "react";
import ReactDOM from "react-dom";
import Backdrop from "@components/Backdrop/Backdrop";

const BackdropPortal = () => {
  return(<Fragment>
    {ReactDOM.createPortal(<Backdrop />, document.getElementById('backdrop-root') as HTMLElement)}
  </Fragment>)
};

export default BackdropPortal;
