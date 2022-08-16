let handler = async(m,{text, conn}) => {
let supa = 'https://api.zacros.my.id/asupan/china'
conn.sendFile(m.chat, supa, null, 'Chinese', m)
}
handler.help = ['china']
handler.tags = ['asupan']
handler.command = /^(china)$/i

module.exports = handler
