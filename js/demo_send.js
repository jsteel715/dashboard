//Import the Messaging SDK
var flowroute = require('./flowroutemessaginglib');

//Set your API credentials
flowroute.configuration.username = "c0f38bec";
flowroute.configuration.password = "4e17a173a2b34b239cb9f630558b86f0";

//Setup your callback function
var cb =  function(err, response){
	if(err){
		console.log(err);
	}
	console.log(response);
};

//Setup your msg variable
var msg = {"to": "17165340526", "from": "19412003750", "content": "you suck"};

//Execute the method
flowroute.MessagesController.createMessage(msg, cb);

//Retrieve a MDR
	//getMessageLookup : function(recordId, callback)
		//flowroute.MessagesController.getMessageLookup("MDRid", cb)