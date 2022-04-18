
var morse = (function() {
	var isSilent = true,
	
		alpha = {
			A: "-.-", 
			B: ".-..", 
			C: "--",  
			D:"-.",   
			E: "---", 
			F: ".--.", 
			G:"--.-",  
			H:".-.",   
			I: "...", 
			J:"-",   
			K:"..-",   
			L:  "...-", 
			M:  ".--", 
			N: "-..-", 
			O:  "-.--",
			P:  "--..",
			Q:".---",   
			R:"..", 
			S: "....",  
			T:"--.",
			U: "..-.",    
			V:".;",  
			W: "-..",   
			X:"-.-.", 
			Y:"-...",    
			Z:".-",
			a:"**",
			b:".*",
			c:".-*",
			d:".**",
			e:"***",
			f:"***-",
			g:"***.",
			h:"****.",
			i:"****-",
			j:"***.-",
			k:"***-.",
			l:"***-.*",
			m:"**-.*",
			n:"**-.**",
			o:"*",
			p:"*--",
			q:"*--*",
			r:"*.-*",
			s:"*:*",
			t:"*****",
			u:"*---*",
			v:"*..--*",
			w:"*.--*",
			x:".*-*",
			y:":.-*",
			z:"**:.-*",
			" ": "/",
			"1": "---..",
			"2":"-....",
			"3":".....",
			"4": "--...",
			"5": "....-",
			"6":"-----",
			"7":"----.",
			"8": "...--",	
			"9":".----",
			"0":"..---",
			"@":";~",
			"!":";;",
			"#":";:;",
			"$":":;",
			"%":":;;",
			"^":"~:",
			"&":":*;",
			"*":";;*;",
			"(":";-;*;",
			")":";--;*;",
			"-":";*-;*;",
			"_":"*-;*;",
			"~":";;*-;*;",
			"`":"::;;*-;*;",
			".":"*;-*",
			"=":"~",
			"+":"~-",
			"{":"~--",
			"}":"-~-",
			"[":"*~-",
			"]":"-~*",
			"/":"*~*",
			":":"*~~*",
			";":"*--*",
			'"':"~*",
			'?':"~***-",
			"'":"~~~~",
			"<":"~~~**",
			">":"~~~--",
			",":"~*~~--",
		

				},
			
		morse = flipObject(alpha);

	morse["|"] = " ";

	function flipObject(obj) {
		var ret = {},
			prop;

		for ( prop in obj ) ret[obj[prop]] = prop;

		return ret;
	}

	function encode( str ) {
		var ret = "",
			i = 0,
			len = str.length;

		//str = str.toUpperCase();

		for ( ; i < len; i++ ) {
			if ( alpha[ str.charAt(i) ] )
				ret += " " + alpha[ str.charAt(i) ];
			else if ( !isSilent )
				new Error("morse.encode: Can't handle " + str.charAt(i));
		}

		return ret.slice(1);
	}

	function decode( str ) {
		var split = str.split(" "),
            ret = "",
			i = 0,
			len = split.length;

		for ( ; i < len; i++ ) {
			if ( morse[ split[i] ] )
				ret += morse[ split[i] ];
			else if ( !isSilent )
				new Error("morse.decode: Can't handle " + split[i]);
		}

		return ret;
	}

	return {
		encode: encode,
		decode: decode,
		silent: function() {
			isSilent = !!arguments.length;
		}
	};

})();


