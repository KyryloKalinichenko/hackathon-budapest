export function Price(props) {
  return (
    <div sx={{ width: "20rem", padding: "5px" }}>
      <h3 style={{ fontFamily: "Calibri" }}>Your monthly price:</h3>
      {props.resultValue} $
    </div>
  );
}
