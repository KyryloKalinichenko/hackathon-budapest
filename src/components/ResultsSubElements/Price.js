
export function Price(props){
    return <div sx={{ width: "20rem", padding:"5px" }} >
        <h3 >
        Your monthly price:
            </h3>
             {props.resultValue} $
        </div>
}