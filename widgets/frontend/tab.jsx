import React from 'react';
class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {index: 0};
  }
  setIndex(n) {
    this.setState({index: n});
  }
  render(){
    const currentTab = this.props.things[this.state.index];
    return(
    <div>
        <h1>Tabs</h1>
        <div className="tab">
          <ul>
            <header className="tab-header">
              <h1 onClick={() => this.setIndex(0)}>Tab 1</h1>
            </header>
            <header className="tab-header">
              <h1 onClick={() => this.setIndex(1)}>Tab 2</h1>
            </header>
          </ul>
          <article>
            {currentTab.content}
          </article>
      </div>
    </div>
    );
  }

}

export default Tab;