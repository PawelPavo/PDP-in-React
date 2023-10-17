import { React, useState } from "react";
import Box from '@mui/material/Box';
import { TextField } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const SignUp = (props) => {

    const [validFirstName, setValidFirstName] = useState(true)
    const [validLastName, setValidLastName] = useState(true)
    const [validAddress, setValidAddress] = useState(true)
    const [title, setTitle] = useState("");
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [address, setAddress] = useState("")

    const handleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleFirstNameChange = (e) => {
        e.preventDefault()
        setFirstName(e.target.value)
    }

    const handleLastNameChange = (e) => {
        e.preventDefault()
        setLastName(e.target.value)
    }

    const handleAddressChange = (e) => {
        e.preventDefault()
        setAddress(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (firstName==="") {
            setValidFirstName(false)
        } 
        if (firstName!=="") {
            setValidFirstName(true)
        }
        if (lastName==="") {
            setValidLastName(false)
        } 
        if (lastName!=="") {
            setValidLastName(true)
        }
        if (address==="") {
            setValidAddress(false)
        } 
        if (address!=="") {
            setValidAddress(true)
        }
        console.log("hello")
    }

    return (
        <>
            <div className="container">
                <h1>Sign Up</h1>
                <div className="col-7">
                    <Box
                        component="form"
                        autoComplete="on"
                        
                    >
                        <FormControl sx={{ m: 1, minWidth: 320 }} size="small">
                            <InputLabel id="Courtesy_Titles" htmlFor="Courtesy_Titles_Dropdown">Courtesy Titles</InputLabel>
                            <Select
                                labelId="Courtesy_Titles"
                                id="select_courtesy_titles"
                                value={title}
                                label="Courtesy Titles"
                                onChange={handleChange}
                                className="mb-4"
                            >
                                <MenuItem value={""}>
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={"Mr"}>Mr</MenuItem>
                                <MenuItem value={"Mrs"}>Mrs</MenuItem>
                                <MenuItem value={"Miss"}>Miss</MenuItem>
                            </Select>
                        </FormControl>
                        <div>
                            <TextField
                                onChange={handleFirstNameChange}
                                id="firstName" 
                                label="First Name" 
                                variant="outlined" 
                                sx={{ m: 1, minWidth: 320 }} 
                                size="small"
                                required
                                error={!validFirstName}
                                helperText={!validFirstName&& <small role="alert">First name field is empty.</small>}/>
                            
                            <TextField
                                onChange={handleLastNameChange}
                                id="lastName" 
                                label="Last Name" 
                                variant="outlined" 
                                sx={{ m: 1, minWidth: 320 }} 
                                size="small"
                                required
                                error={!validLastName}
                                helperText={validLastName? " " : <small role="alert">Last name field is empty.</small>}/>
                        </div>
                        <div>
                            <TextField
                                onChange={handleAddressChange}
                                id="address" 
                                label="Street Address 1" 
                                variant="outlined" 
                                sx={{ m: 1, minWidth: 320}} 
                                size="small"
                                required
                                error={!validAddress}
                                helperText={!validAddress&& <small role="alert">Address field is empty.</small>}/>
                            
                            <TextField
                                onChange={handleAddressChange}
                                id="address_2" 
                                label="Street Address 2" 
                                variant="outlined" 
                                sx={{ m: 1, minWidth: 320}} 
                                size="small"/>
                        </div>
                        <div className="text-end">
                        <button type="submit" tabIndex="0" className="btn btn-primary" onClick={handleSubmit}>Submit</button>

                        </div>
                    </Box>

                </div>
            </div>  
        </>
    )
}

export default SignUp;