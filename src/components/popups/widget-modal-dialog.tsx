import "../../styles.css";
import { QModalDialog, QButton } from "qilab-widgets/dist/react-widgets";
import { useRef, useState } from "react";
import { WidgetModalDialog } from "qilab-widgets/types/components/popups/modal-dialog";

export default function WidgetModal() {
  const modalDialogComponent = useRef<WidgetModalDialog>(undefined);
  const [property, setProperty] = useState({
    id: undefined,
    title: "Modal Dialog Title",
    mobile: false,
    size: undefined,
    customHeader: false
  });

  const getModalSize = (): string => {
    if (property.size === "md") return "modal md";
    if (property.size === "lg") return "modal lg";
    return "modal";
  };

  return (
    <div className="App">
      <h1>React Modal Dialog Widget</h1>
      <div className={getModalSize()}>
        <QModalDialog
          ref={modalDialogComponent}
          id=""
          title={property.title}
          mobile={property.mobile}
          size={property.size}
          customHeader={property.customHeader}
          click={() => {
            alert("Closing modal");
          }}
          children={
            <div className="modal-footer" slot="modalFooter">
              <div>
                <QButton label="Annulla" outline="true" />
                <QButton label="Conferma" />
              </div>
            </div>
          }
        ></QModalDialog>
      </div>
      <div className="container-actions">
        <QButton
          label="medium"
          size="sm"
          outline="true"
          onClick={() => {
            setProperty({ ...property, size: "md", mobile: false });
            modalDialogComponent.current.openModal();
          }}
        ></QButton>
        <QButton
          label="large"
          size="sm"
          outline="true"
          style={{ marginLeft: "1rem" }}
          onClick={() => {
            setProperty({ ...property, size: "lg", mobile: false });
            modalDialogComponent.current.openModal();
          }}
        ></QButton>
        <QButton
          label="extra large"
          size="sm"
          outline="true"
          style={{ marginLeft: "1rem" }}
          onClick={
            () => console.log(property)
            //setProperty({ ...property, readOnly: !property.readOnly })
          }
        ></QButton>
        <QButton
          label="full screen"
          size="sm"
          outline="true"
          style={{ marginLeft: "1rem" }}
          onClick={() => {
            setProperty({ ...property, mobile: true });
            modalDialogComponent.current.openModal();
          }}
        ></QButton>
        <QButton
          label="custom header"
          size="sm"
          outline="true"
          style={{ marginLeft: "1rem" }}
          onClick={() => {
            setProperty({ ...property, size: "xl", mobile: false });
            modalDialogComponent.current.openModal();
          }}
        ></QButton>
      </div>
    </div>
  );
}
