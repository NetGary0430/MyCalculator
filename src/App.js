import "./styles.css";
import MyButton from "./MyButton.js";
import Display from "./Display.js";

export default function App() {
  return (
    <div className="App">
      <Display id="display" type="text" />
      <br />
      <MyButton id="seven" value="7" />
      <MyButton id="eight" value="8" />
      <MyButton id="nine" value="9" />
      <MyButton id="multiply" value="*" />
      <br />
      <MyButton id="four" value="4" />
      <MyButton id="five" value="5" />
      <MyButton id="six" value="6" />
      <MyButton id="subtract" value="-" />
      <br />
      <MyButton id="one" value="1" />
      <MyButton id="two" value="2" />
      <MyButton id="three" value="3" />
      <MyButton id="add" value="+" />
      <br />
      <MyButton id="decimal" value="." />
      <MyButton id="clear" value="C" />
      <MyButton id="divide" value="/" />
      <MyButton id="zero" value="0" />
      <br />
      <MyButton id="equals" value="=" />
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
