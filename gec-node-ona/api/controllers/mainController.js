var request = require('ajax-request');

function getData(req, response){

  var url = 'https://api.ona.io/api/v1/data/138570';

  request({
    url: url,
    method: 'GET',
    options:{json: true} 
  }, function(err, res, body) {

    var data = JSON.parse(body)
    var jsonResponse = [];
    // for(i=0; i < data.response.docs.length -1; i++ ){
    //   var headlineSplit = blankOutWord(data.response.docs[i].headline.main)
    //   var date = data.response.docs[i].pub_date
    //   date = date.split('')
    //   date = date.splice(0, 10)
    //   date = date.join('')
    //   console.log(date)

    //   var object = {
    //     headline: [headlineSplit.headLinePart1, headlineSplit.headLinePart2],
    //     blankWord: headlineSplit.blankWord,
    //     blankWordCharLength: headlineSplit.blankWordLength,
    //     category: req.params.category,
    //     year: req.params.year,
    //     date: date
    //   }

    //   jsonResponse.push(object)
    // }
    console.log('THIS IS DATA', data);
    // response.json(data);
  });


}

getData();

// function blankOutWord(headline){
//   var string = headline.replace (/[.,;,?!\s,]/g, " ");
//   string = string.toUpperCase()
//   string = string.split(' ')

//   min = 0;
//   max = string.length;
//   var indexToSplit;

//   do {
//     indexToSplit = Math.floor(Math.random() * (max - min) + min);

//   } while (string[indexToSplit].length < 4)


//     var first = string.slice(0, indexToSplit).join(' ');
//     var second = string.slice(indexToSplit + 1).join(' ');

//     console.log(first)
//     console.log(second)

//     var response = {
//       headLinePart1: first,
//       headLinePart2: second,
//       blankWord: string[indexToSplit],
//       blankWordLength: string[indexToSplit].length
//     };

//     return response;
  
// }

module.exports = {
  getData: getData
}