import React, { useContext } from "react";

import { DropDown } from "./styles";

import { HomeContext } from "../../context/HomeContext";

const ListView: React.FC = () => {
  const { handleChangeViewType, filtered } = useContext(HomeContext);

  return (
    <DropDown
      name="cars"
      id="cars"
      onChange={(e) => handleChangeViewType(e.target.value)}
      disabled={!filtered.length}
    >
      <option value="list" data-icon="glyphicon-th-list">
        List View
      </option>
      <option value="grid" data-icon="glyphicon-th">
        Grid View
      </option>
    </DropDown>
    // <DropdownButton id="dropdown-basic-button" title="Dropdown button">
    //   <Dropdown.Item href="#/action-1">
    //     <img src={listViewIcon} alt="" style={{ marginRight: "16px" }} />
    //     Action
    //   </Dropdown.Item>
    //   <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    //   <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    // </DropdownButton>
  );
};

export default ListView;
