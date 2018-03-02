var mongoose = require('mongoose');

module.exports = mongoose.model('tagReview', {
   tired : {},
   adventurous: {},
   hungry: {},
   hardworking: {},
   wild: {},
   calm: {},
   curious: {},
   engaging: {},
   educational:{},
   allAges: {}
});