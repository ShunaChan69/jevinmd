let handler = async(m,{text, conn}) => {
let supa = 'https://api.zacros.my.id/asupan/korea'
conn.sendFile(m.chat, supa, null, 'Korea', m)
}
handler.help = ['korea']
handler.tags = ['asupan']
handler.command = /^(korea)$/i

module.exports = handler
