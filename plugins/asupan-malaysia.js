let handler = async(m,{text, conn}) => {
let supa = 'https://api.zacros.my.id/asupan/malaysia'
conn.sendFile(m.chat, supa, null, 'Malaysia', m)
}
handler.help = ['malaysia']
handler.tags = ['asupan']
handler.command = /^(malaysia)$/i

module.exports = handler
