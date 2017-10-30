import React, { Component } from 'react'
import markdownItMermaid from 'markdown-it-mermaid'
import MarkdownIt from 'markdown-it'

var hljs = window.hljs

const markdown = (markup) => {
  console.log(1)

  var md = new MarkdownIt({
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return '<pre class="hljs"><code>' +
                 hljs.highlight(lang, str, true).value +
                 '</code></pre>';
        } catch (__) {}
      }

      return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
    }
  })
  md.use(markdownItMermaid)

  return {
    __html : md.render(markup)
  }
}

export default class HighlightCode extends Component{
  componentDidMount = () => {
    mermaid.init({noteMargin: 10}, document.getElementsByClassName('mermaid'))
  }

  componentDidUpdate = () => {
    mermaid.init({noteMargin: 10}, document.getElementsByClassName('mermaid'))
  }

  render() {
    return (
      <div dangerouslySetInnerHTML={markdown(this.props.source)} />
    )
  }
}
