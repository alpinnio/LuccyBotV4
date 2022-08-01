let handler  = async (m, { conn, usedPrefix }) => { 
	conn.sendButton(m.chat, `Halo Kak👋‹\nsaya adalah Bot WhatsApp yang di bangun menggunakan node.js, Bot ini di edit seseorang yang bernama Fangz. Aku Sebuah Bot yang bisa membantumu di grup ini, klik tombol dibawah ini jika kamu ingin menggunakan bot!`.trim(), `${wm}`, [['🌸 Menu', '.m']], m)
	}

handler.command = /^(salken)$/i

export default handler 

let wm = global.wm


//PERCOBAAN