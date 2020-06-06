falsey1 = false;
falsey2 = 0;
falsey3 = '';
falsey4 = NaN;
falsey5 = undefined;
falsey6 = null;

truthy = 'everything else';

if (truthy) {
	console.log(`Look at what is 'falsey':
      false: ${falsey1}\n
      0: ${falsey2}\n
      '': ${falsey3}\n
      'false': ${falsey4}\n
      'false': ${falsey5}\n
      'false': ${falsey6}\n
      `);
}
