var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  /*const requiredString={
    type:String,
    required:true,
  };
  const requiredNumber={
    type:Number,
      required:true,
  };*/

     
  

  const logEntrySchema = new Schema({
    title: {
    type: String
  },
    comments:{
    type: String
  },

    image:{
      type: String,
    },
  

    rating: {
      type: Number,
      min:0,
      max: 10,
      default:0,
    },
    latitude: {
      //requiredNumber,
      type: Number,
      required: true,
      min:-90,
      max:90,
    },
    longitude: {
      //requiredNumber,
      type: Number,
      required: true,
      min:-180,
      max:180,

    },
    visitDate:{
      required:true,
      type:Date,

    }

    

     // String is shorthand for {type: String}
    
    
  },{
    timestamps:true
  });
  const LogEntry= mongoose.model('LogEntry',logEntrySchema);

  module.exports=LogEntry;
