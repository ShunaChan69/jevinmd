let xfar = require('xfarr-api')
let handler = async (m, { usedPrefix, command, conn, args }) => {
	 	  if (!args[0]) throw `Gunakan format: ${usedPrefix}${command} naruto`
xfar.Pinterest(args[0]).then(async data => {
let pincpt = `Link media : ${data.url}`
conn.sendFile(m.chat,data.url, 'pin.jpg', pincpt,m)})
}
handler.help = ['pinterest2 <keyword>']
handler.tags = ['internet', 'downloader']
handler.command = /^(pinterest2)$/i

module.exports = handler
