// import WidgetInputText from "./components/inputs/texts/widget-input-text";
// import WidgetInputInteger from "./components/inputs/numbers/widget-input-integer";
// import WidgetInputFloat from "./components/inputs/numbers/widget-input-float";
// import WidgetInputCurrency from "./components/inputs/numbers/widget-input-currency";
// import WidgetInputPercentile from "./components/inputs/numbers/widget-input-percentile";
// import WidgetButton from "./components/buttons/widget-button";
// import WidgetModal from "./components/popups/widget-modal-dialog";
// import WidgetInputDatePicker from "./components/inputs/texts/widget-input-date-picker";
import WidgetWaiting from "./components/popups/widget-waiting";
import "./styles.css";

export default function App() {
  return (
    <>
      <WidgetWaiting></WidgetWaiting>
      {/* <WidgetModal></WidgetModal> */}
      {/* <hr />
      <WidgetButton></WidgetButton>
      <hr />
      <WidgetInputPercentile></WidgetInputPercentile>
      <hr />
      <WidgetInputCurrency></WidgetInputCurrency>
      <hr />
      <WidgetInputFloat></WidgetInputFloat>
      <hr />
      <WidgetInputInteger></WidgetInputInteger>
      <hr />
      <WidgetInputText></WidgetInputText> */}
    </>
  );
}
