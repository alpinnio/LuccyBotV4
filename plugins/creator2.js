let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- NOMOR
  let nowner = `${nomorown.split`@`[0]}6288210072756@s.whatsapp.net`
  let teksnomor = `${htki} *OWNER* ${htka}
• @${nomorown.split`@`[0]} •
––––═┅═━ $LuxxyXyz ═┅═━––––

📮 *Note:*
⪧ Owner tidak menerima save contact
⪧ Owner berhak blockir tanpa alasan
⪧ Berbicaralah yang sopan & tidak spam
⪧ Owner Hanya merespon yang berkaitan dengan BOT
⪧ No Telp
⪧ Chat gajelas = Block`

//------------ BIO
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `${htki} *BIODATA* ${htka}
*💌 Nama* : Luxxy
*✉️ Nama RL* : Alfin N......
*♂️ Gender* : Laki - laki
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : 28 March 2008
*🎨 Umur* : 14
*🧮 Kelas* : 8
*🧩 Hobby* : Nonton henta*, main game, Recode script
*💬 Sifat* : Baik, hode, softboy, tydack ramah, g*y
*🗺️ Tinggal* : Indonesia, jawa, bogor
*❤️ Suka* : warnah pink & hitam, trap, waifu wangy, kucing
*💔 Benci* : anak alay, autis, anak epep, sok asik

*- - sᴋɪʟʟs: - -* 
> JavaScript [70.7%]
> Python [11.4%]
> CSS [4.1%]
> Html [0.9%]
> Recode [76.8%]
> Create Webs [88.9%]

✧────···─[ SOSIAL MEDIA ]─···─────✧

📷 *Instagram:* ${sig}
🐈 *Github:* ${sgh}
🥏 *Whatsapp* wa.me/6288210072756${nomorown}
🌐 *Discord:* Soon
🌏 *Website:* 
🎶 *Tiktok:* https://tiktok.com/@luxxystacy

`
  let teks = ' '
const sections = [
   {
	title: `${htjava} OWNER –––––––––·•`,
	rows: [
	    {title: "📱 • Nomor", rowId: ".dev"},
	{title: "🎨 • Biodata", rowId: ".owner bio"},
	{title: "🌐 • Website", rowId: ".website"},
	{title: "🌎 • Script", rowId: ".sc"},
	{title: "👤 • Nama", rowId: ".nameown"},
	]
    },{
	title: `${htjava} SUPPORT ME –––––––·•`,
	rows: [
	    {title: "💹 • Donasi", rowId: ".donasi"},
	{title: "🔖 • Sewa", rowId: ".sewa"},
	{title: "🌟 • Buy Premium", rowId: ".premium"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: null,
  title: `${htki} *OWNER* ${htka}`,
  buttonText: "Click Here !",
  sections
}

  try {
    if (/(creator|owner)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
            break
            case 'bio':
          conn.sendHydrated(m.chat, teksbio, wm, ppown, "https://wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
            break
            
          default:
            return await conn.sendMessage(m.chat, listMessage, { quoted: m, contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/aoaooaoaooaoa/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`⋮☰ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['owner', 'creaor']
handler.tags = ['main', 'info']
handler.command = /^(bioowner)/i

export default handler
