import "../../styles.css";
import { QButton } from "qilab-widgets/dist/react-widgets";

export default function WidgetButton() {
  return (
    <div className="App">
      <div className="container-buttons">
        <h4>Primary buttons</h4>
        <div className="row-buttons">
          <div className="button">
            <QButton
              label="default"
              size="md"
              type="1"
              disabled="false"
              outline="false"
              rounded="false"
              onClick={() => alert("Clicked!")}
            />
          </div>
          <div className="button">
            <QButton
              label="disabled"
              size="md"
              type="1"
              disabled="true"
              outline="false"
              rounded="false"
              onClick={() => alert("Clicked!")}
            />
          </div>
        </div>
      </div>
      <div className="container-buttons">
        <h4>Secondary buttons</h4>
        <div className="row-buttons">
          <div className="button">
            <QButton
              label="default"
              size="md"
              type="2"
              disabled="false"
              outline="false"
              rounded="false"
              onClick={() => alert("Clicked!")}
            />
          </div>
          <div className="button">
            <QButton
              label="disabled"
              size="md"
              type="2"
              disabled="true"
              outline="false"
              rounded="false"
              onClick={() => alert("Clicked!")}
            />
          </div>
        </div>
      </div>
      <div className="container-buttons">
        <h4>Outlined buttons</h4>
        <div className="row-buttons">
          <div className="button">
            <QButton
              label="primary"
              size="md"
              type="1"
              disabled="false"
              outline="true"
              rounded="false"
              onClick={() => alert("Clicked!")}
            />
          </div>
          <div className="button">
            <QButton
              label="secondary"
              size="md"
              type="2"
              disabled="false"
              outline="true"
              rounded="false"
              onClick={() => alert("Clicked!")}
            />
          </div>
        </div>
      </div>
      <div className="container-buttons">
        <h4>Rounded buttons</h4>
        <div className="row-buttons">
          <div className="button">
            <QButton
              label="primary"
              size="md"
              type="1"
              disabled="false"
              outline="false"
              rounded="true"
              onClick={() => alert("Clicked!")}
            />
          </div>
          <div className="button">
            <QButton
              label="secondary"
              size="md"
              type="2"
              disabled="false"
              outline="false"
              rounded="true"
              onClick={() => alert("Clicked!")}
            />
          </div>
        </div>
      </div>
      <div className="container-buttons">
        <h4>Outlined and rounded buttons</h4>
        <div className="row-buttons">
          <div className="button">
            <QButton
              label="primary"
              size="md"
              type="1"
              disabled="false"
              outline="true"
              rounded="true"
              onClick={() => alert("Clicked!")}
            />
          </div>
          <div className="button">
            <QButton
              label="secondary"
              size="md"
              type="2"
              disabled="false"
              outline="true"
              rounded="true"
              onClick={() => alert("Clicked!")}
            />
          </div>
        </div>
      </div>
      <div className="container-buttons">
        <h4>Sizes</h4>
        <div className="row-buttons">
          <div className="button">
            <QButton
              label="small"
              size="sm"
              type="1"
              onClick={() => alert("Clicked!")}
            />
          </div>
          <div className="button">
            <QButton
              label="medium"
              size="md"
              type="1"
              onClick={() => alert("Clicked!")}
            />
          </div>
          <div className="button">
            <QButton
              label="large"
              size="lg"
              type="1"
              onClick={() => alert("Clicked!")}
            />
          </div>
          <div className="button">
            <QButton
              label="small"
              size="sm"
              type="2"
              onClick={() => alert("Clicked!")}
            />
          </div>
          <div className="button">
            <QButton
              label="medium"
              size="md"
              type="2"
              onClick={() => alert("Clicked!")}
            />
          </div>
          <div className="button">
            <QButton
              label="large"
              size="lg"
              type="2"
              onClick={() => alert("Clicked!")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
