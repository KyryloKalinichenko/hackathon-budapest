import { GridStyle } from "./Styling/Styles";
import { Price } from "./ResultsSubElements/Price";
import { PriceConfiguration } from "./ResultsSubElements/PriceConfiguration";
import Grid from "@mui/material/Grid"
import { useState } from "react";


export default function QuotationResult(){
    const [result, setResult] = useState(0);

    function changeResult(updatedResult){
        setResult(updatedResult);
    }
    return <div>
        <Grid container sx={{justifyContent: "center", marginTop:"10%", backgroundColor:"white"}} spacing={5}>
            <Grid item xs={12} md={4} sx={GridStyle}>
                <PriceConfiguration result={result} resultChanger={changeResult}/>
            </Grid >
            <Grid item xs={12} md={4} sx={GridStyle} >
                <Price resultValue={result}/>
            </Grid>
            
        </Grid>
    </div>
}