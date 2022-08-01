let handler = async (m, { conn }) => {
let info = `
*${htki} RULES ${htka}*

©2022 FangzBot Official 
`
const sections = [
   {
	title: `✃ RULES`,
	rows: [
	    {title: "❗Banned Sementara", rowId: '.bansementara', description: 'Banned Trial' },
	    {title: "❗Peringatan", rowId: '.banperingatan', description: 'Warn' },
	{title: "❗Banned Permanen", rowId: '.banpermanen', description: 'Banned selamanya' },
	{title: "❗Banned + Denda", rowId: '.bandenda', description: 'Banned + Denda' },
	{title: "❗Anti Banned", rowId: '.antibanned', description: 'Agar tidak terkena pelanggaran' },
	{title: "❗Note", rowId: '.bannote', description: 'Note Bot' },
	]
    }, 

]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "C E K",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['rulesbot', 'peraturan']
handler.tags = ['info']
handler.command = /^(rules(bot)?|peraturan)$/i
handler.private = true

export default handler
