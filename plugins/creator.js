import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `*Ini Kak owner bot nya*`

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
const message = {
            document: { url: thumbdoc },
            jpegThumbnail: await (await fetch(thumbdoc)).buffer(), fileName: global.wm2, mimetype: td, fileLength: '9999999', pageCount: '999',
            caption: titlebot,
            footer: wm,
            templateButtons: [
                {
                    urlButton: {
                        displayText: '🌹YT OWNER',
                        url: 'https://s.id/-1a7RO',
                    }
                },
                {
                    urlButton: {
                        displayText: '📞 Author',
                        url: 'https://wa.me/6288215689772',

                    }
                },
                {
                    quickReplyButton: {
                        displayText: '🔭OKE',
                        id: 'Ok'
                    }
                },
            ]
        }
        conn.sendMessage(m.chat, message)
conn.reply(m.chat, info, m, { contextInfo: { externalAdReply: {title: global.wm, body: 'Jangan di spam kak owner ku', sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg')  }}})
}
handler.command = /^(dev)$/i

handler.register = true
handler.exp = 3

export default handler