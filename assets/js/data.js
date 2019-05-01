

var getText = function(){
	var data = [];
	data['text_01_01'] = [
	"Local Area Networks",
	"Software and Data live on",
	"your network. You get",
	"unlimited uses"
	]
	data['text_01_02'] = [
	"Cloud",
	"Your software and data",
	"are safe and secure in the",
	"cloud. Unlimited users",
	"access from anywhere."
	]
	data['text_01_03'] = [
	"Service Bureau",
	"Our trained and experienced",
	"staff takes over any part or",
	"all of your billing tasks."
	]
	data['text_01_block'] = [
	"CHOICE OF",
	"PLATFORM",
	"Diversified Utility Billing",
	"software will run on a number",
	"of different platforms from",
	"your in-house LAN to the",
	"cloud. It's designed to make",
	"integration as easy as possible"
	]
	data['text_02_01'] = [
	"Standard Operating",
	"Procedures",
	"Establish rules for every task",
	"in the billing operation.",
	]
	data['text_02_02'] = [
	"Master Calendar",
	"Translates SOP rules into",
	"a daily action plan for",
	"each staffer.",
	]
	data['text_02_03'] = [
	"Dashboard",
	"Provides real-time status",
	"of schedule tasks that are",
	"in process or overdue.",
	]
	data['text_02_04'] = [
	"Mobile Work Orders",
	"Generate field service",
	"work orders electronically",
	"to track real-time status.",
	]
	data['text_02_block'] = [
	"GET",
	"ORGANIZED!",
	"Diversified Utility Billing",
	"software will run on a number",
	"of different platforms from",
	"your in-house LAN to the",
	"cloud. It's designed to make",
	"integration as easy as possible"
	]
	data['text_03_01'] = [
	"Accept Online Payments",
	"Customers pay at their",
	"convenience and you",
	"collect 100%!"
	]
	data['text_03_02'] = [
	"Customer Web Portal",
	"Slash inbound calls by",
	"giving each customer",
	"access to their account",
	"info on the web."
	]
	data['text_03_block'] = [
	"CUSTOMER",
	"SELF SERVICE",
	"Diversified Utility Billing",
	"software will run on a number",
	"of different platforms from",
	"your in-house LAN to the",
	"cloud. It's designed to make",
	"integration as easy as possible"
	]
	data['text_04_01'] = [
	"Import, Don’t",
	"Keystroke Meter Reads",
	"Speed bill calculation  meter read systems.",
	"with interfaces to most major",
	"meter read systems.",
	]
	data['text_04_02'] = [
	"Save Postage",
	"with Email Bills",
	"Generate email, post card",
	"or letter bills with checklist",
	"driven process.",
	]
	data['text_04_03'] = [
	"Stay on Top of",
	"Receivables",
	"Easily identify late payers,",
	"then generate late and shut",
	"off notices.",
	]
	data['text_04_block'] = [
	"STREAMLINED",
	"BILLING",
	"PROCESSES",
	"Diversified Utility Billing",
	"software will run on a number",
	"of different platforms from",
	"your in-house LAN to the",
	"cloud. It's designed to make",
	"integration as easy as possible"
	]
	data['text_05_01'] = [
	"Import, Don't",
	"Keystroke Meter Reads",
	"Speed bill calculation  meter read systems.",
	"with interfaces to most major",
	"meter read systems.",
	]
	data['text_05_02'] = [
	"Save Postage",
	"with Email Bills",
	"Generate email, post card",
	"or letter bills with checklist",
	"driven process.",
	]
	data['text_05_03'] = [
	"Stay on Top of",
	"Receivables",
	"Easily identify late payers,",
	"then generate late and shut",
	"off notices.",
	]
	data['text_05_block'] = [
	"SUPERCHARGED",
	"PAYMENT",
	"PROCESSING",
	"Diversified Utility Billing",
	"software will run on a number",
	"of different platforms from",
	"your in-house LAN to the",
	"cloud. It's designed to make",
	"integration as easy as possible"
	]
	return data;
}

var getSize = function(){
	var size = [];
	size['text_01_01'] = 140
	size['text_01_02'] = 45
	size['text_01_03'] = 110
	size['text_01_block'] = [110,110]
	size['text_02_01'] = [135,80]
	size['text_02_02'] = 110
	size['text_02_03'] = 75
	size['text_02_04'] = 140
	size['text_02_block'] = [42,130]
	size['text_03_01'] = 160
	size['text_03_02'] = 150
	size['text_03_block'] = [115,135]
	size['text_04_01'] = [90,160]
	size['text_04_02'] = [95,110]
	size['text_04_03'] = [95,82]
	size['text_04_block'] = [145,80,120]
	size['text_05_01'] = [90,160]
	size['text_05_02'] = [95,110]
	size['text_05_03'] = [95,82]
	size['text_05_block'] = [145,80,120]
	return size;
}


var getFunc = function(){
	var func = [];
	func['bubble_01_01'] = function(){ window.location = "platforms#in_house"; }
	func['bubble_01_02'] = function(){ window.location = "platforms#cloud"; }
	func['bubble_01_03'] = function(){ window.location = "service-bureau"; }
	func['bubble_02_01'] = function(){ window.location = "features#master_calendar"; }
	func['bubble_02_02'] = function(){ window.location = "features#master_calendar"; }
	func['bubble_02_03'] = function(){ window.location = "features#dashboard"; }
	func['bubble_02_04'] = function(){ window.location = "features#workorder"; }
	func['bubble_03_01'] = function(){ window.location = "features#card_payments"; }
	func['bubble_03_02'] = function(){ window.location = "/#customer_portal"; }
	func['bubble_04_01'] = function(){ window.location = "features#billing"; }
	func['bubble_04_02'] = function(){ window.location = "features#billing"; }
	func['bubble_04_03'] = function(){ window.location = "features#billing"; }
	func['bubble_05_01'] = function(){ window.location = "features#billing"; }
	func['bubble_05_02'] = function(){ window.location = "features#billing"; }
	func['bubble_05_03'] = function(){ window.location = "features#billing"; }
	return func;
}


function getData(){
	return {
		"data": getText(),
		"size": getSize(),
		"func": getFunc()
	};
}
