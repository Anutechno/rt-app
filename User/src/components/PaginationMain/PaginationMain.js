import React, { useState } from 'react';
import { Box, MenuItem, Pagination, Select, Typography } from '@mui/material';
import './PaginationMain.scss'

const PaginationMain = () => {
    const [pageCount, setPageCount] = useState('');

    const handleChangeCount = (event) => {
        setPageCount(event.target.value);
    };

  return (
   <>
          <Box
              className='product-pagination'
              sx={{
                  border: "1px solid #CBCBCB",
                  borderRadius: "5px",
                  margin: "10px 0px",
              }}
          >
              <Box>
                  <Typography>
                      Page 1 of 4
                  </Typography>
              </Box>
              <Box>
                  <Pagination count={4} shape="rounded" />
              </Box>
              <Box className='product-result'>
                  <Typography>
                      Results per page
                  </Typography>
                  <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={pageCount}
                      onChange={handleChangeCount}
                      placeholder='50'
                  >
                      <MenuItem value={50}>50</MenuItem>
                      <MenuItem value={100}>100</MenuItem>
                      <MenuItem value={150}>150</MenuItem>
                      <MenuItem value={200}>200</MenuItem>
                  </Select>
              </Box>
          </Box>
   </>
  )
}

export default PaginationMain