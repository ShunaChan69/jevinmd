let handler = async(m,{text, conn}) => {
let supa = 'https://api.zacros.my.id/asupan/thailand'
conn.sendFile(m.chat, supa, null, 'Thailand', m)
}
handler.help = ['thailand']
handler.tags = ['asupan']
handler.command = /^(thailand)$/i

module.exports = handler
