import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const CategoryList = (props) => {
    return (
        <div className="Category-list">
            <List sx={{ width: "100%", maxWidth: 360, bgcolor: (theme) => theme.palette.grey[100],}}  >
                <ListItem divider>
                    <ListItemText primary={props.name} />
                </ListItem>
                {/* <Divider /> */}
            </List>
        </div>
    );
};
export default CategoryList;
