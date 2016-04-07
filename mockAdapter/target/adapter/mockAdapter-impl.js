/*
 *  mocks for New HybridWallet PoT
 */

function getLimit(param) {

	var fakeResponse = {
	    currentLimit: 85,
	    options: [{
	        number: 10
	    }, {
	        number: 25
	    }, {
	        number: 35
	    }, {
	        number: 50
	    }, {
	        number: 70
	    }, {
	        number: 85
	    }, {
	        number: 100
	    }, {
	        number: 120
	    }, {
	        number: 135
	    }, {
	        number: 150
	    }, {
	        number: 175
	    }, {
	        number: 200
	    }, {
	        number: 230
	    }, {
	        number: 250
	    }, {
	        number: 300
	    }]
	};

	return fakeResponse;
}

function setLimit(param) {
	return {result: "done"}
}


function getCards(param) {
	var fakeCards = {
	  account: "3425493",
	  cards: [
	    {
	      id: "R0FrNXfM",
	      name: "Annie Hamilton",
	    	cn: "**** **** **** 1234",
	      date: "05 / 19"
	    },
	    {
	      id: "fggd4GY0",
	      name: "Annie Hamilton",
	      cn: "**** **** **** 2345",
	      date: "12 / 17"
	    },
	    {
	      id: "fSSWUe7d",
	      name: "Annie Hamilton",
	      cn: "**** **** **** 3456",
	      date: "11 / 16"
	    },
	    {
	      id: "mGkU6KMe",
	      name: "Carmen Hamilton",
	      cn: "**** **** **** 4567",
	      date: "01 / 16"
	    }
	  ]
	};

	return fakeCards;
}

function getMessages() {
	var fakeResponse = {
    "messages": [{
        text: "On 28th of october our branches will be closed, due to national bank day",
        date: "19/10/2015"
    }, {
        text: "Your default transaction limits were set to 85 USD",
        date: "14/10/2015"
    }, {
        text: "Thank you for using our renovated Hybrid Wallet application!",
        date: "10/10/2015"
    }]
	};



	return fakeResponse;
}

function getCardTransactions(card) {
	var cardId = card;

	if (cardId == "R0FrNXfM") {
	  var cardTransactions = {
	    "id": "R0FrNXfM",
	    "balance": "21,645.29",
	    "transactions": [
	      {
	        "transactionId": 26945,
	        "amount": 29,
	        "place": "Sherrill",
	        "date": "1438567550106"
	      },
	      {
	        "transactionId": 1113,
	        "amount": 161,
	        "place": "Love",
	        "date": "1438848818501"
	      },
	      {
	        "transactionId": 20178,
	        "amount": 193,
	        "place": "Lyons",
	        "date": "1438306008102"
	      },
	      {
	        "transactionId": 23250,
	        "amount": 149,
	        "place": "Waters",
	        "date": "1438357445102"
	      },
	      {
	        "transactionId": 1801,
	        "amount": 171,
	        "place": "Barrett",
	        "date": "1438127882406"
	      },
	      {
	        "transactionId": 16110,
	        "amount": 74,
	        "place": "Weiss",
	        "date": "1438122401204"
	      },
	      {
	        "transactionId": 22972,
	        "amount": 176,
	        "place": "Sims",
	        "date": "1438844064507"
	      },
	      {
	        "transactionId": 23834,
	        "amount": 214,
	        "place": "Wiley",
	        "date": "1438441182806"
	      },
	      {
	        "transactionId": 13655,
	        "amount": 146,
	        "place": "Hedrick",
	        "date": "1438602670506"
	      },
	      {
	        "transactionId": 3597,
	        "amount": 108,
	        "place": "Carlson",
	        "date": "1438887140308"
	      }
	    ]
	  };



	} else if (cardId == "fggd4GY0") {

	  var cardTransactions = {
	    "id": "fggd4GY0",
	    "balance": "11,302.97",
	    "transactions": [
	      {
	        "transactionId": 19033,
	        "amount": 98,
	        "place": "Barton",
	        "date": "1438570507400"
	      },
	      {
	        "transactionId": 11096,
	        "amount": 152,
	        "place": "Dyer",
	        "date": "1438724861008"
	      },
	      {
	        "transactionId": 23523,
	        "amount": 24,
	        "place": "Haynes",
	        "date": "1438664127100"
	      },
	      {
	        "transactionId": 6262,
	        "amount": 75,
	        "place": "Beatty",
	        "date": "1438256261007"
	      },
	      {
	        "transactionId": 18470,
	        "amount": 229,
	        "place": "Horne",
	        "date": "1438867216606"
	      },
	      {
	        "transactionId": 11637,
	        "amount": 188,
	        "place": "McKee",
	        "date": "1438435271302"
	      }
	    ]
	  };

	} else if (cardId == "fSSWUe7d") {

	  var cardTransactions = {
	    "id": "fSSWUe7d",
	    "balance": "14,561.43",
	    "transactions": [
	      {
	        "transactionId": 12291,
	        "amount": 245,
	        "place": "Winters",
	        "date": "1438885354105"
	      },
	      {
	        "transactionId": 17434,
	        "amount": 86,
	        "place": "Glover",
	        "date": "1438025633301"
	      },
	      {
	        "transactionId": 18573,
	        "amount": 132,
	        "place": "Garrison",
	        "date": "1438405801606"
	      },
	      {
	        "transactionId": 11486,
	        "amount": 153,
	        "place": "Barton",
	        "date": "1438352602700"
	      },
	      {
	        "transactionId": 14894,
	        "amount": 212,
	        "place": "Swanson",
	        "date": "1438426668806"
	      },
	      {
	        "transactionId": 26770,
	        "amount": 141,
	        "place": "Kelly",
	        "date": "1438817660207"
	      },
	      {
	        "transactionId": 12006,
	        "amount": 122,
	        "place": "Katz",
	        "date": "1438264525800"
	      },
	      {
	        "transactionId": 11243,
	        "amount": 64,
	        "place": "Sellers",
	        "date": "1438442847401"
	      },
	      {
	        "transactionId": 22219,
	        "amount": 164,
	        "place": "Berger",
	        "date": "1438351128702"
	      }
	    ]
	  };

	} else if (cardId == "mGkU6KMe") {

	  var cardTransactions = {
	    "id": "mGkU6KMe",
	    "balance": "38,140.05",
	    "transactions": [
	      {
	        "transactionId": 23712,
	        "amount": 153,
	        "place": "Meadows",
	        "date": "1438161335704"
	      },
	      {
	        "transactionId": 17525,
	        "amount": 57,
	        "place": "McClure",
	        "date": "1438078444303"
	      },
	      {
	        "transactionId": 20321,
	        "amount": 146,
	        "place": "Carlson",
	        "date": "1438580406808"
	      },
	      {
	        "transactionId": 11210,
	        "amount": 245,
	        "place": "Chan",
	        "date": "1438155862606"
	      },
	      {
	        "transactionId": 10769,
	        "amount": 212,
	        "place": "Crane",
	        "date": "1438632184104"
	      },
	      {
	        "transactionId": 9297,
	        "amount": 50,
	        "place": "Horne",
	        "date": "1438306236805"
	      },
	      {
	        "transactionId": 8357,
	        "amount": 102,
	        "place": "Lawson",
	        "date": "1438418278007"
	      }
	    ]
	  };

	} else {
	  return {error: "Invalid card id"};
	}

	return cardTransactions;
}
