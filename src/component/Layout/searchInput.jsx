import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import GetGoods from "../../hooks/getGoods";
import searchContext from "../../modules/context/searchContext";
import SearchShow from "./searchShow";
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

const SearchInput = () => {
  const { changeSearchText } = useContext(searchContext);
  const navigate = useNavigate();
  const { searchHintGoods } = GetGoods();
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    changeSearchText(e.target.value);
  };

  const handleSearch = () => {
    navigate("/searcher", { state: { arr: searchHintGoods } });
  };

  const handleClear = () => {
    setInputValue('');
    changeSearchText('');
  };

  return (
    <div>
      <TextField
        placeholder="Искать товары и категории"
        variant="outlined"
        fullWidth
        size="small"
        value={inputValue}
        onChange={handleInputChange}
        style={{width: '650px', height: '4vh'}}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              {inputValue && (
                <ClearIcon onClick={handleClear} style={{ cursor: 'pointer' }} />
              )}
            </InputAdornment>
          )
        }}
      />
      {searchHintGoods.length !== 0 && <SearchShow />}
    </div>
  );
};

export default SearchInput;
