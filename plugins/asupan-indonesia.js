let handler = async(m,{text, conn}) => {
let supa = 'https://api.zacros.my.id/asupan/Indonesia'
conn.sendFile(m.chat, supa, null, 'indonesia', m)
}
handler.help = ['indo']
handler.tags = ['asupan']
handler.command = /^(indo)$/i

module.exports = handler
