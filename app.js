import qrcode from "qrcode-terminal"
import { Client, LocalAuth } from "whatsapp-web.js"

const client = new Client({
	authStrategy: new LocalAuth(),
})

client.initialize()

client.on("qr", (qr) => {
	qrcode.generate(qr, { small: true })
})

client.on("ready", () => {
	console.log("Client is ready!")
})

client.on("authenticated", (session) => {
	console.log("Client is Authenticated!")
})

client.on("message", (message) => {
	//
	const messageBody =
		message.body.charAt(0).toLocaleUpperCase() +
		message.body.toLocaleLowerCase().slice(1)

	if (messageBody.includes("Hello")) {
		message.reply(
			`Malik isn't Available now 
            \nSelect a number bellow 
            \n1.It's Vey Urgentπ€π€
            \n2.Call When you are availableππ
            \n3.Not Important just checking ππ
            \n4.It's a delicate matter(Money Matter π« π« )
            `
		)
	}

	if (messageBody.includes("Not at all")) {
		message.reply(`Great Have a Nice Day`)
	}

	if (messageBody.includes("Yes")) {
		message.reply(`Kindly  Call π± to him on +234XXXXXXXXXX`)
	}

	if (messageBody.includes("Ok")) {
		message.reply(`Is there anything else i can help you withβ`)
	}

	switch (message.body) {
		case "1":
			message.reply(`Kindly Place a Call π± to him on +234XXXXXXXXXX`)
			break
		case "2":
			message.reply(`I would let him know ASAPβ`)
			break
		case "3":
			message.reply(`He would respond when he is online ππππ`)
			break
		case "4":
			message.reply(`Ogbeni Call him on +234XXXXXXXXXX ππ`)
	}
})
