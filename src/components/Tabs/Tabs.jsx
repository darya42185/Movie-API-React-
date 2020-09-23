import React from "react";

import "./Tabs.scss";

class Tabs extends React.Component {

  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log("nextProps sort by", nextProps.sort_by);
  //   console.log("prevProps sort by", this.props.sort_by);
  // }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.sort_by !== this.props.sort_by) {
      return true;
    } else {
      return false;
    }
  }


  render() {
    const { sort_by, updateSortBy } = this.props;

    const handleClick = (value) => {
      return (event) => {
        updateSortBy(value);
      };
    };

    const getClassLink = (value) => {
      return `nav-link ${sort_by === value ? "active" : ""}`;
    };

    return (
      <div>
        <ul className="tabs">
          <li className="nav-item">
            <div
              className={getClassLink("popularity.desc")}
              onClick={handleClick("popularity.desc")}
            >
              Popularity desc
            </div>
          </li>
          <li className="nav-item">
            <div
              className={getClassLink("revenue.desc")}
              onClick={handleClick("revenue.desc")}
            >
              Revenue desc
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Tabs;
