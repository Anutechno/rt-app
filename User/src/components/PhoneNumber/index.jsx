import {
    FormControl,
    InputAdornment,
    InputLabel,
    OutlinedInput,
} from "@mui/material";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneNumber = ({ phoneHandler, areaCodeHandler, getAreaCode }) => {
    return (
        <>
            <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="phone-no">Phone No:</InputLabel>
                <OutlinedInput
                    id="phone-no"
                    label="Phone No:"
                    onChange={phoneHandler}
                    type="number"
                    startAdornment={
                        <InputAdornment position="start">
                            <PhoneInput
                                country={"us"}
                                value={getAreaCode}
                                onChange={areaCodeHandler}
                            />
                        </InputAdornment>
                    }
                />
            </FormControl>
        </>
    );
};

export default PhoneNumber;
