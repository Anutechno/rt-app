import React,{ useState } from 'react';
import Select from 'react-select';

function ListingLayout() {
  const [selectedOption, setSelectedOption] = useState([]); 
    const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log(selectedOption);
  };
  const options = [
    { value: '1', label: 'View' },
    { value: '2', label: 'Gallery' },      
  ];    
    //const [selectedOption, setSelectedOption] = useState(options[0]);  
  return (
    <Select  defaultValue={{ value: "1", label: "View" }} options={options} onChange={handleChange} />   
  );
}

export default ListingLayout;
