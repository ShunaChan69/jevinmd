let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'donasi'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
┌〔 Donasi • Emoney 〕
├ Dana : 089509952003
├ Pulsa : 089509952003
└────
Berapapun donasi kalian akan sangat berarti 

Contact person Owner:
wa.me/${numberowner} (Owner)`
  conn.sendButtonImg(m.chat, fla + teks, anu, telegram, 'Menu', '.menu', m) 
}
handler.help = ['donasi', 'donate']
handler.tags = ['xp', 'info']
handler.command = /^(donasi|donate)$/i

module.exports = handler
