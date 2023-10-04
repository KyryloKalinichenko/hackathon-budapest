import { GridStyle } from "./Styling/Styles";
import { Price } from "./ResultsSubElements/Price";
import { PriceConfiguration } from "./ResultsSubElements/PriceConfiguration";
import Grid from "@mui/material/Grid"


export default function QuotationResult(){
    return <div>
        <Grid container sx={{justifyContent: "center", padding: "15%"}} spacing={5}>
            <Grid item  sx={GridStyle}>
                <PriceConfiguration/>
            </Grid >
            <Grid item  sx={GridStyle}>
                <Price/>
            </Grid>
        </Grid>
    </div>
}