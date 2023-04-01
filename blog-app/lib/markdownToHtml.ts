import m2h from "zenn-markdown-html";

/**
 * markdownからHTMLに変換して出力する関数
 * @param markdown
 * @returns
 */
export const markdownToHtml = async (markdown: string): Promise<string> => m2h(markdown)
