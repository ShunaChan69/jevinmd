let handler = async m => m.reply(`
Bot ini menggunakan script

https://github.com/rdculous/jevinmd

jangan lupa follow dan star
`.trim()) // Tambah sendiri kalo mau
handler.help = ['script']
handler.tags = ['info']
handler.command = /^script|sc|sourcecode$/i
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler