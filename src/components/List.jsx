import React, { Component } from "react";

class List extends Component {
  render() {
    return (
      <div>
        <div>
          Added item:
          <ul>
            {this.props.items ? (
              this.props.items.map((item, index) => {
                return <li key={index}>{item}</li>;
              })
            ) : (
              <p>No item in the list yet</p>
            )}
          </ul>
        </div>
        <hr></hr>
        <div>
          Deleted item:
          <ul>
            {this.props.deletedItems ? (
              this.props.deletedItems.map((item, index) => {
                return <li key={index}>{item}</li>;
              })
            ) : (
              <p>No item in the list yet</p>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default List;
