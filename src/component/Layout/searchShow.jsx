import SearchIcon from '@mui/icons-material/Search';
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from "@mui/material/ListItemText";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import GetGoods from "../../hooks/getGoods";
import searchContext from "../../modules/context/searchContext";

const SearchShow = () => {
  const { searchText } = useContext(searchContext);
  const { searchHintGoods } = GetGoods();

  useEffect(() => {}, [searchText]);

  return (
    <Box sx={{ position: 'absolute', width: '45%', zIndex: 1, maxHeight: '400px', overflowY: 'auto', backgroundColor: 'white', boxShadow: 3 }}>
      <List>
        {searchHintGoods.map((item, index) => (
          <Link to={`/product?id=${item.id}`} key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItem button>
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              <ListItemAvatar>
                <Avatar src={item.media[0]} alt={item.title} />
              </ListItemAvatar>
              <ListItemText primary={item.title} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
};

export default SearchShow;
