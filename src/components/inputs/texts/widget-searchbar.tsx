import "../../../styles.css";
import { QSearchbar, QButton } from "qilab-widgets/dist/react-widgets";

export default function WidgeSearchbar() {
  return (
    <div className="App">
      <h1>React Input Textarea Widget</h1>
      <div className="container-input">
        <QSearchbar id="search"></QSearchbar>
      </div>
      <div className="container-actions">
        <QButton
          label="Show value"
          size="sm"
          outline="true"
          onClick={() => {}}
        ></QButton>
      </div>
    </div>
  );
}
