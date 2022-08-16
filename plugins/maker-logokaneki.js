const fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan namanya'
  m.reply('proses..')
  let res = `https://restapi.frteam.xyz/kaneki?nama=${response}&apikey=rdculous`
  conn.sendFile(m.chat, res, 'kaneki.jpg', `Nih kak`, m, false)
}
handler.help = ['logokaneki'].map(v => v + ' <text')
handler.tags = ['maker']
handler.command = /^(logokaneki)$/i
handler.limit = true

module.exports = handler