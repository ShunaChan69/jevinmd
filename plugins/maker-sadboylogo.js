const fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('proses..')
  let res = `https://restapi.frteam.xyz/sadboy?nama=${response}&nama2=${response[1]}&apikey=rdculous`
  conn.sendFile(m.chat, res, 'sadboy.jpg', `Nih kak`, m, false)
}
handler.help = ['sadboylogo'].map(v => v + ' <text|text>')
handler.tags = ['maker']
handler.command = /^(sadboylogo)$/i
handler.limit = true

module.exports = handler