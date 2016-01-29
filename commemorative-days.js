commemorativeDays = function(day, month) {
    if(!day || !month) return console.log('Date and month are required');
    if(!commemorative.hasOwnProperty(month)) {
      return console.log('Invalid month')
    }
    if(!commemorative[month].hasOwnProperty(day)) {
      return console.log('This date is not a commemorative');
    }
    var isArray = Array.isArray(commemorative[month][day]);
    if(isArray) return commemorative[month][day].toString()
    return commemorative[month][day]
}

var commemorative = {
        January : {
            '1'    : 'New Year',
            '4'    : 'Myanmar Independence Day',
            '6'    : 'National Watoto Literature Day',
            '9'    : 'Pravasi Bharatiya Divas (Non-resident Indian Day)',
            '12'   : 'National Youth Day (India)',
            '15'   : 'Indian Army Day',
            '21'   : 'National Hug Day',
            '25'   : [
                'National Voters\' Day (India)',
                'Dydd Santes Dwynwen (Saint Dwynwen\'s – Welsh Valentine\'s Day)',
                'Burns Night (Roberts Burns\' birth anniversary)'
            ],
            '26'   : [
                'Republic Day(India)',
                'Australia Day'
            ],
            '27'   : 'International Day of Commemoration in Memory of the Victims of the Holocaust',
            '30'   : 'Martyr\'s Day (Mahatma Gandhi\'s Martyrdom Day)',
            '31'   : 'International Street Children\'s Day'
          }
};
