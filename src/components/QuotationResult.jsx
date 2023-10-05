import { GridStyle, theme } from "./Styling/Styles";
import { Price } from "./ResultsSubElements/Price";
import { PriceConfiguration } from "./ResultsSubElements/PriceConfiguration";
import Grid from "@mui/material/Grid"
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";


export default function QuotationResult(){
    const [result, setResult] = useState(0);

    function changeResult(updatedResult){
        setResult(updatedResult);
    }
    return <ThemeProvider theme={theme}>
        <Grid container sx={{justifyContent: "center", padding: "15%"}} spacing={5}>
            <Grid item  sx={GridStyle}>
                <PriceConfiguration result={result} resultChanger={changeResult}/>
            </Grid >
            <Grid item  sx={GridStyle} >
                <Price resultValue={result} />
            </Grid>
        </Grid>
    </ThemeProvider>
}