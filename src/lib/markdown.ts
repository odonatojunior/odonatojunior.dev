import Showdown from 'showdown'

export default function markdownCompiler(markdown: string) {
  const converter = new Showdown.Converter()
  return converter.makeHtml(markdown)
}
