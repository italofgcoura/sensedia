import React, { useContext } from "react";

import { DropDown } from "./styles";

import { HomeContext } from "../../context/HomeContext";

const ListView: React.FC = () => {
  const { handleChangeViewType } = useContext(HomeContext);

  return (
    <DropDown
      name="cars"
      id="cars"
      onChange={(e) => handleChangeViewType(e.target.value)}
    >
      <option value="list" data-icon="glyphicon-th-list">
        <span>List View</span>
      </option>
      <option value="grid" data-icon="glyphicon-th">
        <span>Grid View</span>
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
