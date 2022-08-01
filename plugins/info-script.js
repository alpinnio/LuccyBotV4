let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `๑–––┅═━🌹SCRIPT┅═━–––๑
           
      📮 Sc? By Fangz
`
const templateButtons = [
    {index: 1, urlButton: {displayText: '🎀Youtube', url: 'https://youtube.com/channel/UCACHvReRmw2fxgMutPFCBWg'}},
    {index: 1, urlButton: {displayText: '🐈Github', url: sgh}},
    {index: 4, quickReplyButton: {displayText: '🎐Buy Sc', id: '.beliscript'}},
    {index: 5, quickReplyButton: {displayText: '🌸Minta sc', id: 'kontol'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^script|sc$/i

export default handler