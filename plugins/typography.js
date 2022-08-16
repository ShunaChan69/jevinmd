
let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text\nContoh : .typography jevin'
  m.reply('_Proses..._')
  let res = `https://botcahx-rest-api.herokuapp.com/api/photooxy/flower-typography?text=${response[0]}`
  conn.sendFile(m.chat, res, 'botcahx.jpg', `© Jevin`, m, false)
}
handler.help = ['typography'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(typography)$/i

module.exports = handler
