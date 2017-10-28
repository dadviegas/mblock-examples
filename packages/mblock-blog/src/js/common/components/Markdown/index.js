import React, { Component } from 'react'
import markdownItMermaid from 'markdown-it-mermaid'
import MarkdownIt from 'markdown-it'

var hljs = window.hljs

const markdown = (markup) => {
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

  mermaid.initialize({startOnLoad: true, theme: 'forest'})

  return {
    __html :md.render(markup)
  }
}

export default ({source}) => (<div dangerouslySetInnerHTML={markdown(source)} />)
