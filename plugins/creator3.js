import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `*⛄ Nyari owner ku mau ngapain?*\n`,wm + '\n\n' + botdate, thumb, [['🦄️BIO DATA','.bioowner'],['🥞HATI NYA','Kontol']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: bottime,
                        body: 'DEVELOPER BOT: FANGZ',          previewType: 0,
                        thumbnail: fs.readFileSync("./thumbnail.jpg"),
                        sourceUrl: snh
                      }}
})
}


handler.command = ['owner']
export default handler
