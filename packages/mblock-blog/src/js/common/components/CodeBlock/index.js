import React, { Component, PureComponent } from 'react'
var hljs = window.hljs

class HighlightCode extends Component{
  componentDidMount = () => {
    this.highlightCode()
  }

  componentDidUpdate = () => {
    this.highlightCode()
  }

  highlightCode = () => {
    hljs.highlightBlock(this.refs.code)
  }

  render() {
    return (
      <pre>
        <code className={this.props.language} ref="code">
          {this.props.literal}
        </code>
      </pre>
    )
  }
}

export default HighlightCode
