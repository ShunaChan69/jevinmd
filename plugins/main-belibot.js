let handler = async (m, { conn }) => {
let info = `
• Berikut list harga sewa bot
• Bingung? silahkan chat owner

https://wa.me/19047502362 (Kanna Chan)
`
const sections = [
   {
	title: `300++ FITUR`,
	rows: [
	{title: "HEMAT", rowId: '.hemat1 *Paket:* HEMAT • Sewa', description: 'Price: 10k (2 minggu)' },
	{title: "NORMAL", rowId: '.normal1 *Paket:* NORMAL • Sewa', description: 'Price: 15k (1 bulan)' },
	{title: "STANDAR", rowId: '.standar1 *Paket:* STANDAR • Sewa', description: 'Price: 25k (2 bulan)' },
	{title: "PRO", rowId: '.pro1 *Paket:* PRO • Sewa', description: 'Price: 40k (4 bulan)' },
	{title: "VIP", rowId: '.vip1 *Paket:* VIP • Sewa', description: 'Price: 100k (12 bulan)' },
	]
    }, {
    title: `PREMIUM USER`,
	rows: [
	{title: "HEMAT", rowId: '.hemat2 *Paket:* HEMAT • Premium', description: 'Price: 5k (1 minggu)' },
	{title: "NORMAL", rowId: '.normal2 *Paket:* NORMAL • Premium', description: 'Price: 10k (1 bulan)' },
	{title: "PRO", rowId: '.pro2 *Paket:* PRO • Premium', description: 'Price: 30k (4 bulan)' },
	{title: "VIP", rowId: '.vip2 *Paket:* VIP • Premium', description: 'Price: 50k (8 bulan)' },
	{title: "VVIP", rowId: '.vvip *Paket:* PERMANENT • Premium', description: 'Price: 70k (12 bulan)' },
	]
    }, 
]

const listMessage = {
  text: info,
  footer: wm,
  buttonText: "List Harga",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium)$/i

module.exports = handler
