const request = require('ajax-request');
const url     = 'https://api.ona.io/api/v1/data/138570';


const getOna = (req, res) => {

}

const getQuarter = (req, res) => {

  if(req.params.quarter) {

    request({
      url: url,
      method: 'GET',
      options:{json: true} 
    }, function(err, res, body) {

      let data = JSON.parse(body)
      let jsonResponse = []
      // for(i=0; i < data.length -1; i++ ){
        
  //       //clean data here

  //       let object = {
  //        //return only the data we want here
         
  //       }

  //       jsonResponse.push(object)
  //     }

  //     response.json(jsonResponse)
  //   });

  // } else {
  //   console.log('validation error')
  // }
      console.log(data);
    })

  }
}

module.exports = {
  getQuarter: getQuarter,
  getOna: getOna
}
