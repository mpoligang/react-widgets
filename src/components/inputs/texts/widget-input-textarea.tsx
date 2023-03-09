import "../../../styles.css";
import { QTextArea, QButton } from "qilab-widgets/dist/react-widgets";
import { GenericInput } from "qilab-widgets/dist/models/generic-input";
import { useRef, useState } from "react";

export default function WidgetInputTextarea() {
  const inputTextComponent = useRef<GenericInput>(undefined);
  const [property, setProperty] = useState({
    value: undefined,
    readOnly: false,
    disabled: false
  });

  const validationsMsg = {
    msgMaxError: "Lunghezza massima 10",
    msgMinError: "Lunghezza minima 3",
    msgRequired: "Campo Obbligatorio"
  };

  return (
    <div className="App">
      <h1>React Input Textarea Widget</h1>
      <div className="container-input">
        <QTextArea
          ref={inputTextComponent}
          id="WidgetInputTextReact"
          name="property"
          label="Input Textarea"
          required={true}
          minLength="3"
          maxLength="10"
          disabled={property.disabled}
          validationMsg={validationsMsg}
          readOnly={property.readOnly}
          value={property.value}
          input={(event: { detail: { name: string; value: string } }) => {
            setProperty({ ...property, value: event.detail.value });
          }}
        ></QTextArea>
      </div>
      <div className="container-actions">
        <QButton
          label="Show value"
          size="sm"
          outline="true"
          onClick={() => console.log(property.value)}
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
