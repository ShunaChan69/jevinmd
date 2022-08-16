const fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan namanya'
  m.reply('proses..')
  let res = `https://restapi.frteam.xyz/lolimaker?nama=${response}&apikey=rdculous`
  conn.sendFile(m.chat, res, 'loli.jpg', `Done`, m, false)
}
handler.help = ['logololi'].map(v => v + ' <text')
handler.tags = ['maker']
handler.command = /^(logololi)$/i
handler.limit = true

module.exports = handler