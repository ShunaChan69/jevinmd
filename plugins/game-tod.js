let fetch = require('node-fetch')

let handler = async (m, { conn, command, usedPrefix }) => {
  if (/^tod$/i.test(command)) {
    await conn.send2But(m.chat, 'Truth or Dare', wm, 'Truth', `${usedPrefix}truth`, 'Dare', `${usedPrefix}dare`, m)
  }
  if (/^truth$/i.test(command)) {
    let res = await fetch(API('frteam', '/truth', {}, 'apikey'))
    if (!res.ok) throw eror
    let json = await res.json()
    if (!json.status) throw json
    conn.send2But(m.chat, json.result, wm, 'Truth', `${usedPrefix}truth`, 'Dare', `${usedPrefix}dare`, m)
  }
  if (/^dare$/i.test(command)) {
    let res = await fetch(API('frteam', '/dare', {}, 'apikey'))
    if (!res.ok) throw eror
    let json = await res.json()
    if (!json.status) throw json
    conn.send2But(m.chat, json.result, wm, 'Truth', `${usedPrefix}truth`, 'Dare', `${usedPrefix}dare`, m)
  }
}
handler.help = ['tod']
handler.tags = ['fun']
handler.command = /^(tod|truth|dare)$/i

module.exports = handler 