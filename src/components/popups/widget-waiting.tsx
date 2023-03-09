import "../../styles.css";
import { QWaiting, QButton } from "qilab-widgets/dist/react-widgets";
import { useState } from "react";

import loader from "../../../loader.svg";

export default function WidgetWaiting() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <h1>React Waiting Widget</h1>
      <QWaiting src={loader} show={show} id="wait"></QWaiting>
      <QButton
        label="waiting"
        size="sm"
        outline="true"
        onClick={() => {
          setShow(true);
          setTimeout(() => {
            setShow(false);
          }, 5000);
        }}
      ></QButton>
    </div>
  );
}
