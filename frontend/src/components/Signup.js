import { Typography, TextField, Button, Box as MuiBox, Container } from '@material-ui/core';
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:5000/api/signup", {
        name: inputs.name,
        email: inputs.email,
        password: inputs.password,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // send http request
    sendRequest().then(() => history("/login"));
  };
  return (
<Container maxWidth="xs">
      <form onSubmit={handleSubmit}>
        <MuiBox
          marginTop={8}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Typography component="h1" variant="h5">
            Signup
          </Typography>

          <TextField
            name="name"
            onChange={handleChange}
            value={inputs.name}
            variant="outlined"
            margin="normal"
            fullWidth
            label="Name"
          />
          <TextField
            name="email"
            onChange={handleChange}
            type="email"
            value={inputs.email}
            variant="outlined"
            margin="normal"
            fullWidth
            label="Email"
            autoComplete="email"
          />
          <TextField
            name="password"
            onChange={handleChange}
            type="password"
            value={inputs.password}
            variant="outlined"
            margin="normal"
            fullWidth
            label="Password"
            autoComplete="new-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Signup
          </Button>
        </MuiBox>
      </form>
    </Container>

  
  );
};

export default Signup;
