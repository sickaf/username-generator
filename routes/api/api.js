module.exports = function(app) {

	// User API Methods

	app.get('/api/get-username', function (req, res){			
		res.send(randomUsername());
	});

	function randomUsername() {
  		
  		var nouns = [	'fart',      'weed',       'poop',       'snowboard',    'longboarding', 
  						'blaze',     'pussy',      'meat',       'slippery',     'dumb', 
  						'heady',     'messy',      'drunk',      'blood',        'unintended', 
  						'uncool',    'fartridden', 'decrepit',   'justbad',      'impressively',
  						'gross',     'pathetic',   'floppy',     'chrisbrown',   'hurt',
  						'DJ',        'fragile',    'used',       'abused',       'shit',
  						'fuck',      'gushy',      'mushy',      'squishy',      'soggy',
  						'frothy',    'awkward',    'shredded',   'piss',         'yung',
  						'ass',       'terrible',   'sadistic',   'lackluster',   'unfortunate',
  						'ebola',     'aids',       'massive',    'herpes',       'gonorrhea',
  						'diarrhea',  'chlamidia',  'aborted',    'fecal',        'generic',
  						'heavyset',  'anorexic',   'bulimic',    'unlucky',      'lucky',
  						'horrible',  'voluptuous', 'punctual',   'outofshape',   'porous',
  						'poor',      'divorced',   'athletic',   'unathletic',   'mediocre',
  						'failed',	 'precocious', 'prodigious', 'unremarkable', 'spoiled',
  						'rotten',    'fresh',      'overdue',    'underaccomplished', 'bionic',
  						'spent',     'destined',   'underwhelming', 'oozing',      'festering',
  						'pissing',   'tight',      'splitopen',  'depressing',    'depressed',
  						'overrated', 'meager',    'homely',     'shitty',        'shit',
  						'fucky',     'fuck',      'misused',    'abused',        'recycled',
  						'bleeding',  'bloody',    'guttural',   'blasted',       'cute',
  						'shameless', 'slaughtered', 'unapologetic', 'awful', 'stupid',
              'dumb', 'smelly', 'yummy', 'delicious', 'powerful', 'mouthbreathing',
              'dumbass', 'incredible', 'vibrating', ''  ];
  		
  		var descriptors = [	'fan',        'dude',           'man',       'doctor',   'expert', 
  							'thug',       'hero',           'king',      'queen',    'idiot',
  							'queef',      'muscles',        'splatter',  'satan',    'worshipper', 
  							'virgin',     'boy',            'girl',      'badbitch', 'sack',
  							'loser',      'cultworshipper', 'astronaut', 'playboy',  'pounder',
  							'asstronaut', 'blaster',        'penis',     'cock',     'culo',
  							'puta',       'piss',           'ass',       'dopeboy',   'buttfucker',
  							'douche',     'pissboy',        'cumstain',  'ebola',    'aids',
  							'diarrhea',   'chlamidia',      'abortion',  'fetus',    'athlete',
  							'failure',    'underwhelmer',   'homie',     'shit',     'fuck',
  							'fuckboy',    'fuckgirl',       'fuckperson', 'fiend',   'dominator',
  							'cockboy',    'frothball',      'weiner',    'thunderlips', 'meatdrapes',
  							'thunderlips', 'beefcurtains',  'kumquat',   'obama',     'republican',
  							'filler', 'democrat' , 'vibrator', 'dildo', 'babe', 'bebe', 'baby'     ];

      // Return today's date and time
      var currentTime = new Date()
  		var numbers = ['420','69','xXx','XOXO','XO',currentTime.getFullYear(),'2000','','',''];

      var seperators = ['','','','', '_'];

  		var noun = nouns[Math.floor(Math.random() * nouns.length)];
  		noun = noun.charAt(0).toUpperCase() + noun.substring(1);
      var seperator = seperators[Math.floor(Math.random() * seperators.length)];
  		var descriptor = descriptors[Math.floor(Math.random() * descriptors.length)];
  		descriptor = descriptor.charAt(0).toUpperCase() + descriptor.substring(1);
  		var number = numbers[Math.floor(Math.random() * numbers.length)];
  		var res = noun+descriptor+number;

  		return noun+seperator+descriptor+number;
	}

}

function handleError (err, res) {
	res.status(404);
	res.end(err);
}