import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";

function QuotationQuestions() {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid item xs={6}>
        <FormControl fullWidth sx={{ m: 1 }} style={{ paddingBottom: "20px" }}>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">€</InputAdornment>}
            label="Amount"
            sx={{ borderColor: "#ee7f00" }}
          />
        </FormControl>
        <Button
          variant="contained"
          disableRipple
          disableElevation
          sx={{
            bgcolor: "#ea650d",
            "&:hover": { bgcolor: "#ee7f00" },
            width: "50%",
            margin: "0 auto",
          }}
        >
          Continue
        </Button>
      </Grid>
    </Grid>
  );
}

export default QuotationQuestions;
