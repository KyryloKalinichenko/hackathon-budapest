import { styled, alpha, Box } from "@mui/system";
import { Slider, sliderClasses } from "@mui/base/Slider";
import PropTypes from "prop-types";
import { useState } from "react";
import { deepOrange, grey } from "@mui/material/colors";

export function PriceConfiguration(props) {
  const [years, setYears] = useState(19);
  const [capital, setCapital] = useState(10000);

  if (props.typeOfCalculation === "fixed") {
    props.resultChanger(calcFIxed());
  } else {
    props.resultChanger(calcFlexed());
  }

  function calcFIxed() {
    return Math.round(
      4.15 +
        ((capital - 25000) * (42.5 - 4.15)) / 975000 +
        ((24.05 +
          ((capital - 25000) * (661.52 - 24.05)) / 975000 -
          (4.15 + ((capital - 25000) * (42.5 - 4.15)) / 975000)) *
          (years - 18)) /
          (65 - 18)
    );
  }

  function calcFlexed() {
    return Math.round(
      4.7 +
        ((capital - 25000) * (59.5 - 4.7)) / 975000 +
        ((34.05 +
          ((capital - 25000) * (996.11 - 34.55)) / 975000 -
          (4.7 + ((capital - 25000) * (59.5 - 4.7)) / 975000)) *
          (years - 18)) /
          (65 - 18)
    );
  }

  function onChangeYears(event, updatedYears) {
    setYears(updatedYears);
    if (props.typeOfCalculation === "fixed") {
      props.resultChanger(calcFIxed());
    } else {
      props.resultChanger(calcFlexed());
    }
  }

  function onChangeCapital(event, updatedCapital) {
    setCapital(updatedCapital);
    if (props.typeOfCalculation === "fixed") {
      props.resultChanger(calcFIxed());
    } else {
      props.resultChanger(calcFlexed());
    }
  }
  return (
    <div>
      <Box width={"100%"}>
        <h3 style={{ fontFamily: "Calibri", paddingBottom: "10px" }}>
          Capital
        </h3>

        <StyledSlider
          sx={{ margin: "1%", width: "40vh" }}
          defaultValue={10000}
          min={10000}
          max={1000000}
          getAriaValueText={valuetext}
          step={1000}
          marks={marks}
          onChange={onChangeCapital}
          slots={{ valueLabel: SliderValueLabel }}
        />
      </Box>
      <Box>
        <h3 style={{ fontFamily: "Calibri", marginTop: "20px" }}>Period</h3>
        <StyledSlider
          sx={{ margin: "1%", width: "40vh" }}
          defaultValue={19}
          min={19}
          max={65}
          getAriaValueText={valuetext}
          step={1}
          onChange={onChangeYears}
          marks={yearlyMarks}
          slots={{ valueLabel: SliderValueLabel }}
        />
      </Box>
    </div>
  );
}

const marks = [
  {
    value: 10000,
    label: "10.000$",
  },
  {
    value: 1000000,
    label: "1000.000$",
  },
];

const yearlyMarks = [
  {
    value: 19,
    label: "19 years",
  },
  {
    value: 65,
    label: "65 years",
  },
];

function SliderValueLabel({ children }) {
  return <span className="valueLabel">{children}</span>;
}

SliderValueLabel.propTypes = {
  children: PropTypes.element.isRequired,
};

function valuetext(value) {
  return `${value}$`;
}

const StyledSlider = styled(Slider)(
  ({ theme }) => `
    color: ${
      theme.palette.mode === "light" ? deepOrange[500] : deepOrange[300]
    };
    height: 6px;
    width: 100%;
    padding: 16px 0;
    display: inline-block;
    position: relative;
    cursor: pointer;
    touch-action: none;
    -webkit-tap-highlight-color: transparent;
  
    &:hover {
      opacity: 1;
    }
  
    &.${sliderClasses.disabled} { 
      pointer-events: none;
      cursor: default;
      color: ${theme.palette.mode === "light" ? grey[300] : grey[600]};
      opacity: 0.5;
    }
  
    & .${sliderClasses.rail} {
      display: block;
      position: absolute;
      width: 100%;
      height: 4px;
      border-radius: 2px;
      background-color: currentColor;
      opacity: 0.4;
    }
  
    & .${sliderClasses.track} {
      display: block;
      position: absolute;
      height: 4px;
      border-radius: 2px;
      background-color: currentColor;
    }
  
    & .${sliderClasses.mark} {
        position: absolute;
        width: 8px;
        height: 8px;
        border-radius: 99%;
        background-color: ${
          theme.palette.mode === "light" ? deepOrange[200] : deepOrange[900]
        };
        top: 43%;
        transform: translateX(-50%);
      }
    
      & .${sliderClasses.markActive} {
        background-color: ${
          theme.palette.mode === "light" ? deepOrange[500] : deepOrange[400]
        };
      }
    
      & .${sliderClasses.markLabel} {
        font-family: Calibri;
        font-weight: 600;
        font-size: 14px;
        position: absolute;
        top: 20px;
        transform: translateX(-50%);
        margin-top: 8px;
      }

    & .${sliderClasses.thumb} {
      position: absolute;
      width: 16px;
      height: 16px;
      margin-left: -6px;
      margin-top: -6px;
      box-sizing: border-box;
      border-radius: 50%;
      outline: 0;
      border: 3px solid currentColor;
      background-color: #fff;
  
      :hover,
      &.${sliderClasses.focusVisible} {
        box-shadow: 0 0 0 0.25rem ${alpha(
          theme.palette.mode === "light" ? deepOrange[400] : deepOrange[300],
          0.15
        )};
      }
  
      &.${sliderClasses.active} {
        box-shadow: 0 0 0 0.25rem ${alpha(
          theme.palette.mode === "light" ? deepOrange[200] : deepOrange[300],
          0.3
        )};
      }
    
      
      & .valueLabel {
        font-family: Calibri;
        font-weight: 600;
        font-size: 12px;
        position: relative;
        top: -1.5em;
        text-align: center;
        align-self: center;
      }
    
      
    }
  `
);
