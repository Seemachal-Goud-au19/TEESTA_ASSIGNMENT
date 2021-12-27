import React from "react";
import "./App.css";
import {Button ,ButtonGroup}from "@material-ui/core/";
import CameraEnhanceIcon from "@mui/icons-material/CameraEnhance";

const App = () => {
  return (
    <div className="App">
      <h2>hello dyna</h2>
      <ButtonGroup>
      <Button
        startIcon={<CameraEnhanceIcon />}
        variant="contained"
        color="primary"
        size="large"
      >
        save
      </Button>
      <Button
        startIcon={<CameraEnhanceIcon />}
        variant="contained"
        color="secondary"
        size="large"
      >
        edit
      </Button>
      </ButtonGroup>
      <div>hello new gitt</div>
     
    </div>
  );
};

export default App;
