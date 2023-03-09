import "../../../styles.css";
import { QInputFloat, QButton } from "qilab-widgets/dist/react-widgets";
import { GenericInput } from "qilab-widgets/dist/models/generic-input";
import { useRef, useState } from "react";

export default function WidgetInputFloat() {
  const inputFloatComponent = useRef<GenericInput>(undefined);
  const [property, setProperty] = useState({
    value: undefined,
    readOnly: false,
    disabled: false
  });

  const validationsMsg = {
    msgMinError: "Valore minimo inseribile 0.5",
    msgMaxError: "Valore massimo inseribile 20.7",
    msgRequired: "Campo Obbligatorio"
  };

  return (
    <div className="App">
      <h1>React Input Float Widget</h1>
      <h3>Two Binding Way with Object</h3>
      <div className="container-input">
        <QInputFloat
          ref={inputFloatComponent}
          id="QInputInteger"
          name="property"
          label="Input Float"
          placeholder=""
          required={true}
          minValue="0.5"
          maxValue="20.7"
          disabled={property.disabled}
          validationMsg={validationsMsg}
          readOnly={property.readOnly}
          value={property.value}
          input={(event: { detail: { name: string; value: string } }) => {
            setProperty({
              ...property,
              value: parseFloat(event.detail.value)
            });
          }}
        ></QInputFloat>
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
            inputFloatComponent.current.hasError();
          }}
        ></QButton>
      </div>
    </div>
  );
}
