let handler = async(m,{text, conn}) => {
let supa = 'https://api.zacros.my.id/asupan/vietnam'
conn.sendFile(m.chat, supa, null, 'Vietnam', m)
}
handler.help = ['vietnam']
handler.tags = ['asupan']
handler.command = /^(vietnam)$/i

module.exports = handler
