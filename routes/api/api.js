module.exports = function(app) {

	// User API Methods

	app.get('/api/get-username', function (req, res){			
		res.send(randomUsername());
	});

	function randomUsername() {
  		
      var nouns = [ 'fart',     'weed',       'poop',       'snowboard',    'longboarding', 
              'blaze',    'pussy',      'meat',       'slippery',     'dumb', 
              'heady',    'messy',      'drunk',      'blood',        'unintended', 
              'uncool',   'fartridden', 'decrepit',   'justbad',      'impressively',
              'gross',    'pathetic',   'floppy',     'chrisbrown',   'hurt',
              'DJ',       'fragile',    'used',       'abused',       'shit',
              'fuck',     'gushy',      'mushy',      'blast',        'soggy',
              'frothy',   'awkward',    'shredded',   'piss',         'puss',
              'ass',      'terrible',   'sadistic',   'lackluster',   'unfortunate',
              'ebola',    'aids',       'massive',    'herpes',       'gonorrhea',
              'diarrhea', 'chlamidia',  'aborted',    'fecal',        'doesntpickuponsocialcues',
              'heavyset', 'anorexic',   'bulimic',    'unlucky',      'lucky',
              'horrible', 'voluptuous', 'punctual',   'outofshape',   'porous',
              'poor',     'divorced',   'athletic',   'unathletic',   'mediocre',
              'failed', 'precocious', 'prodigious', 'unremarkable', 'spoiled',
              'rotten',   'fresh',      'overdue',    'underaccomplished', 'bionic',
              'spent',    'destined',   'underwhelming', 'oozing',      'festering',
              'pussing',  'tight',      'splitopen',  'depressing',    'depressed',
              'overrated', 'meager',    'homely',     'shitty',        'shit',
              'fucky',     'fuck',      'misused',    'abused',        'recycled',
              ''   ];
      
      var descriptors = [ 'fan',        'dude',           'man',       'doctor',   'expert', 
                'thug',       'hero',           'king',      'queen',    'idiot',
                'queef',      'muscles',        'splatter',  'satan',    'worshipper', 
                'virgin',     'boy',            'girl',      'badbitch', 'sack',
                'loser',      'cultworshipper', 'astronaut', 'playboy',  'pounder',
                'asstronaut', 'blaster',        'penis',     'cock',     'culo',
                'puta',       'piss',           'ass',       'n*****',   'buttfucker',
                'cumboy',     'pissboy',        'cumstain',  'ebola',    'aids',
                'diarrhea',   'chlamidia',      'abortion',  'fetus',    'athlete',
                'failure',    'underwhelmer',   'homie',     'shit',     'fuck',
                'fuckboy',    'fuckgirl',       'fuckperson', 'fiend',   'dominator',
                'cockboy',    'frothball' ];  		

      var numbers = ['420','69',''];

  		var noun = nouns[Math.floor(Math.random() * nouns.length)];
  		noun = noun.charAt(0).toUpperCase() + noun.substring(1);
  		var descriptor = descriptors[Math.floor(Math.random() * descriptors.length)];
  		descriptor = descriptor.charAt(0).toUpperCase() + descriptor.substring(1);
  		var number = numbers[Math.floor(Math.random() * numbers.length)];
  		return noun+descriptor+number;
	}

}

function handleError (err, res) {
	res.status(404);
	res.end(err);
}