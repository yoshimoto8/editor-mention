// use jsx to render html, do not modify simple.html

import 'rc-mention/assets/index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import Mention from 'rc-mention';

const suggestions = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'simaQ', 'YuhangGe', 'dqaria', 'RaoHai'];

const MentionEditor = React.createClass({
  getInitialState() {
    return {
      suggestions,
    };
  },
  onSearchChange(value) {
    const searchValue = value.toLowerCase();
    const filtered = suggestions.filter(suggestion => suggestion.toLowerCase().indexOf(searchValue) !== -1);
    this.setState({
      suggestions: filtered,
    });
  },
  render() {
    const { suggestions } = this.state;
    return <Mention style={{width: 300}} onSearchChange={this.onSearchChange} suggestions={suggestions} prefix="@" />;
  }
});

ReactDOM.render(<div>
  <p> you can @ one of afc163, benjycui, yiminghe, jljsj33, simaQ, YuhangGe, dqaria, RaoHai</p>
  <MentionEditor />
  </div>, document.getElementById('__react-content'));
