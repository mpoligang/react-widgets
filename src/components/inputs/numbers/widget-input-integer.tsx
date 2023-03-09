import "../../../styles.css";
import { QInputInteger, QButton } from "qilab-widgets/dist/react-widgets";
import { GenericInput } from "qilab-widgets/dist/models/generic-input";
import { useRef, useState } from "react";

export default function WidgetInputInteger() {
  const inputIntegerComponent = useRef<GenericInput>(undefined);
  const [property, setProperty] = useState({
    value: undefined,
    readOnly: false,
    disabled: false
  });

  const validationsMsg = {
    msgMinError: "Valore minimo inseribile 0",
    msgMaxError: "Valore massimo inseribile 9999",
    msgRequired: "Campo Obbligatorio"
  };

  return (
    <div className="App">
      <h1>React Input Integer Widget</h1>
      <h3>Two Binding Way with Object</h3>
      <div className="container-input">
        <QInputInteger
          ref={inputIntegerComponent}
          id="QInputInteger"
          name="property"
          label="Input Integer"
          placeholder=""
          required={true}
          minValue="0"
          maxValue="9999"
          disabled={property.disabled}
          validationMsg={validationsMsg}
          readOnly={property.readOnly}
          value={property.value}
          input={(event: { detail: { name: string; value: string } }) => {
            setProperty({
              ...property,
              value: parseInt(event.detail.value, 10)
            });
          }}
        ></QInputInteger>
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
            inputIntegerComponent.current.hasError();
          }}
        ></QButton>
      </div>
    </div>
  );
}
