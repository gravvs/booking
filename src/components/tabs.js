import React from "react"
class Tabs extends React.Component {
    state = {
      activeTab: this.props.defaultActive || 0
    };
  
    renderMenu() {
      return React.Children.map(this.props.children, (item, key) => {
        return (
          <li
            key={key}
            style={{
              fontWeight: key === this.state.activeTab ? "bold" : undefined,
              color: key === this.state.activeTab ? "white" : undefined,
              background: key === this.state.activeTab ? "#0071c2" : undefined
            }}
            onClick={() => this.setState({ activeTab: key })}
          >
            {item.props.title}
          </li>
        );
      });
    }
  
    render() {
      return (
        <div className="place__wrapper">
          <ul className="place__subwrapper">{this.renderMenu()}</ul>
          <div>
            {React.Children.toArray(this.props.children)[this.state.activeTab]}
          </div>
        </div>
      );
    }
  }
  export default Tabs