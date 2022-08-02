let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `📮 _*SC GA GRATIS KAK:(, CHAT OWNER UNTUK MEMBELI SCNYA!1!1!1!*_

Chat Owner Ke Nomor Dibawah Ini:3
wa.me/6288210072756
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*FANGZ BOT GITHUB*', 'status@broadcast') 
}
handler.help = ['github']
handler.tags = ['info']
handler.command = /^(github)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 25

export default handler 
