import "../../../styles.css";
import { QInputPercentile, QButton } from "qilab-widgets/dist/react-widgets";
import { GenericInput } from "qilab-widgets/dist/models/generic-input";
import { useRef, useState } from "react";

export default function WidgetInputPercentile() {
  const inputPercentileComponent = useRef<GenericInput>(undefined);
  const [property, setProperty] = useState({
    value: undefined,
    readOnly: false,
    disabled: false
  });

  const validationsMsg = {
    msgMinError: "Valore minimo inseribile 0",
    msgMaxError: "Valore massimo inseribile 100",
    msgRequired: "Campo Obbligatorio"
  };

  return (
    <div className="App">
      <h1>React Input Percentile Widget</h1>
      <h3>Two Binding Way with Object</h3>
      <div className="container-input">
        <QInputPercentile
          ref={inputPercentileComponent}
          id="QInputInteger"
          name="property"
          label="Input Percentile"
          placeholder=""
          required={true}
          minValue="0"
          maxValue="100"
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
        ></QInputPercentile>
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
            inputPercentileComponent.current.hasError();
          }}
        ></QButton>
      </div>
    </div>
  );
}
