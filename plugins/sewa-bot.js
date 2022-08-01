let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} SEWA ${htka}`
const templateButtons = [
    {index: 1, urlButton: {displayText: '💱SEWA DI SINI', url: 'https://wa.me/p/5447696441957458/6288215689772'}},
    {index: 4, quickReplyButton: {displayText: '↗️UPGRADE PREMIUM', id: '.upprem'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.command = /^belibot$/i
handler.private = true

export default handler


//BIARIN AJA, DARI PADA GA BERATURAN 