import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

const SelectCountry = ({ countryChangeHandler }) => {
    // store countries
    const [country, setCountry] = useState([]);

    // countries api
    useEffect(() => {
        const fetchCountry = async () => {
            const res = await fetch("https://restcountries.com/v3.1/all");
            const data = await res.json();
            setCountry(data);
        };
        fetchCountry();
    }, []);

    return (
        <>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Country</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Country"
                    size="medium"
                    onChange={countryChangeHandler}
                >
                    {country.length !== 0 &&
                        country.map((item) => {
                            return (
                                <MenuItem value={item.continents}>
                                    {item.continents}
                                </MenuItem>
                            );
                        })}
                </Select>
            </FormControl>
        </>
    );
};

export default SelectCountry;
