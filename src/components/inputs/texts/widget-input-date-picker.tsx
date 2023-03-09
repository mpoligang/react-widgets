import "../../../styles.css";
import { QDatePicker, QButton } from "qilab-widgets/dist/react-widgets.js";
import { GenericInput } from "qilab-widgets/dist/models/generic-input";
import { useRef, useState } from "react";

export default function WidgetInputDatePicker() {
  const inputTextComponent = useRef<GenericInput>(undefined);
  const [property, setProperty] = useState({
    value: undefined,
    readOnly: false,
    disabled: false
  });

  const validationsMsg = {
    msgRequired: "Data Obbligatoria"
  };

  const minDate = new Date("2023/03/01").toISOString();
  const maxDate = new Date("2023/03/10").toISOString();

  return (
    <div className="App">
      <h1>React Input Date Picker Widget</h1>
      <h3>Two Binding Way with Object</h3>
      <div className="container-input">
        <QDatePicker
          ref={inputTextComponent}
          id="WidgetInputTextReact"
          name="date"
          label="Input Text"
          required={true}
          minDate={minDate}
          maxDate={maxDate}
          disabled={property.disabled}
          validationMsg={validationsMsg}
          readOnly={property.readOnly}
          value={property.value}
          change={(event: { detail: { name: string; value: string } }) => {
            setProperty({ ...property, value: event.detail.value });
          }}
        ></QDatePicker>
      </div>
      <div className="container-actions">
        <QButton
          label="Show value"
          size="sm"
          outline="true"
          onClick={() => console.log(property)}
        ></QButton>
        <QButton
          label="Disable"
          size="sm"
          outline="true"
          style={{ marginLeft: "1rem" }}
          onClick={() =>
            setProperty({ ...property, disabled: !property.disabled })
          }
        >
          {!property.disabled ? "Disable" : "Enable"}
        </QButton>
        <QButton
          label="Read only"
          size="sm"
          outline="true"
          style={{ marginLeft: "1rem" }}
          onClick={() =>
            setProperty({ ...property, readOnly: !property.readOnly })
          }
        ></QButton>
        <QButton
          label="Validation"
          size="sm"
          outline="true"
          style={{ marginLeft: "1rem" }}
          onClick={() => {
            inputTextComponent.current.hasError();
          }}
        ></QButton>
      </div>
    </div>
  );
}
