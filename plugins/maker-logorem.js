const fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan namanya'
  m.reply('proses..')
  let res = `https://restapi.frteam.xyz/rem?nama=${response}&apikey=rdculous`
  conn.sendFile(m.chat, res, 'rem.jpg', `Done`, m, false)
}
handler.help = ['rem'].map(v => v + ' <text')
handler.tags = ['maker']
handler.command = /^(rem)$/i

module.exports = handler