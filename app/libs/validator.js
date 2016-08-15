function validate(data,rules) {
	//console.log(rules);
	var result = true;

	var str = "";

	window.errors = [];

	window.request = {};

	for(var i in rules)
	{
		var rule = rules[i];
		rule= rule.split("|");
		for(var j in rule)
		{
			rule[j] = rule[j].split(":");

			str = "validate"+rule[j][0]+"("+"data."+i;

			if(rule[j].length > 1)
			{
				
				str += ",";

				for (var k = 1; k < rule[j].length; k++) {
					str += rule[j][k] + ",";
				}

				str = str.substring(0,str.length -1);
				
			}

			str += ");"



			

			
			if(!eval(str))
			{
				result = false;
				//messages
				if(rule[j][0] == 'required')
				{
					window.errors.push(i+" is requried");
				}

				if(rule[j][0] == 'min')
				{
					window.errors.push(i+" should be longer than " + rule[j][1] );
				}

				if(rule[j][0] == 'max')
				{
					window.errors.push(i+" should be lesser than " + rule[j][1] );
				}

			}

		}

	}

	if(result)
	{
		window.request = data;
	}

	return result;
}

function validaterequired(text) {
	return text != undefined && text.trim().length > 0
}

function validatemin(text,limit) {
	return text != undefined && text.trim().length >= limit;
}

function validatemax(text,limit) {
	return text != undefined && text.trim().length < limit;
}