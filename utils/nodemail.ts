const {
	SocketLabsClient,
	BasicMessage,
	EmailAddress,
} = require("@socketlabs/email");

const serverId = 46846;
const injectionApiKey = "Hq74ZzWs32Kdi6B9Xxo5";

const message = new BasicMessage();

const client = new SocketLabsClient(serverId, injectionApiKey);

const contactHtml = ({
	name,
	email,
	phone,
	message,
	supplier,
	eirCode,
	numOfCows,
	parlourSizeMake,
}: any) => {
	return `<head>
		<style>
			body{
				padding: 100px;
			}
			div{
				padding: 10px;
				padding-left: 24px;
				
			}
			h1{
				margin-bottom: 24px;
			}

			img{
				width: 100%;
			}

			.logo{
				width:10%;
				margin: 0 auto;
			}

			.logoDiv{
				display: flex;
				justify-content: center;
				width:100%;
				gap: 48px;
			}
			.contact{
				background: #1C2535;
				color:white;
			}
		</style>
	</head><body>
	<img src="https://res.cloudinary.com/dqdktlbxw/image/upload/v1674128923/DairyData/leon-ephraim-AxoNnnH1Y98-unsplash_1_4_w5z2ft.png" alt="front"/>
	<div>
	
	<h1>${name} has contacted you</div></h1>
	<div>
			Cutomer Name: ${name}
	</div>
	<div>
			Cutomer Email: ${email}
	</div>
	<div>
			Cutomer Phone: ${phone}
	</div>
	<div>
			ParlourSizeMake: ${parlourSizeMake || "---"}
	</div>
	
	<div>
			Number Of Cows: ${numOfCows || "---"}
	</div>
	
	<div>
			EirCode: ${eirCode || "---"}
	</div>
	
	<div>
			Supplier: ${supplier || "---"}
	</div>

	<div>
			Message: ${message || "---"}
	</div>
	
	<span></span>
	<div class="logoDiv">

	<img class="logo" src="https://res.cloudinary.com/dqdktlbxw/image/upload/v1674128294/DairyData/Logo_Only_Blue_h5vpza.png" alt="logo"/>
			</div>
	<div class="logoDiv contact">
			<div>Dairy Data</div>
			<div>+353 87 606 4344</div>
			<div>info@dairydata.ie</div>
	</div>

    </body>`;
};

export const sendSocket = async (data: any) => {
	message.to.push("info@dairydata.ie");
	message.subject = "New Contact";
	message.htmlBody = contactHtml(data);
	message.from = new EmailAddress("info@dairydata.ie");
	message.ampBody =
		"<!doctype html>" +
		"<html amp4email>" +
		"<head>" +
		'  <meta charset="utf-8">' +
		"  <style amp4email-boilerplate>body{visibility:hidden}</style>" +
		"  <style amp-custom>" +
		"    h1 {" +
		"      margin: 1rem;" +
		"    }" +
		"  </style>" +
		"</head>" +
		"<body>" +
		`  <h1>${data.name} has contacted you</h1>` +
		"</body>" +
		"</html>";

	client
		.send(message)
		.then((res: any) => console.log(res))
		.catch((err: any) => console.log(err));
};
