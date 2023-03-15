import Showdown from 'showdown'
import ShowdownHighLight from 'showdown-highlight'

export default function markdownCompiler(markdown: string) {
  const converter = new Showdown.Converter({
    ghCodeBlocks: true,
    openLinksInNewWindow: true,
    extensions: [
      ShowdownHighLight({
        pre: true,
        auto_detection: true
      })
    ]
  })
  return converter.makeHtml(markdown)
}
