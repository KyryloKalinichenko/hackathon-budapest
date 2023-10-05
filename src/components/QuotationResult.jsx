import { GridStyle, theme } from "./Styling/Styles";
import { Price } from "./ResultsSubElements/Price";
import { PriceConfiguration } from "./ResultsSubElements/PriceConfiguration";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import hero from "../assets/images/hero-image.jpg";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material";

export default function QuotationResult(props) {
  const [result, setResult] = useState(0);

  function changeResult(updatedResult) {
    setResult(updatedResult);
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <div>
          <Grid
            container
            sx={{
              justifyContent: "center",
              //   marginTop: "10%",
              backgroundColor: "white",
            }}
            spacing={5}
          >
            <Grid item xs={12} md={5} sx={GridStyle}>
              <PriceConfiguration
                result={result}
                resultChanger={changeResult}
                typeOfCalculation={props.typeOfCalculation}
              />
            </Grid>
            <Grid item xs={12} md={5} sx={GridStyle}>
              <Price resultValue={result} />
            </Grid>
            <Grid>
              {" "}
              <Button variant="contained" sx={{ marginBottom: "20px" }}>
                Get your insurance now
              </Button>
            </Grid>
            <Grid>
              <img src={hero} width="100%" />
            </Grid>
          </Grid>
        </div>
      </ThemeProvider>
    </>
  );
}
