const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  datehin:{
    type: String,
    required:true
  },
  image_urlhin: {
    type: String,
    required: true,
  },
  heading_firsthin: {
    type: String,
    required: true,
  },
  heading_secondhin: {
    type: String,
    required: true,
  },
  heading_thirdhin: {
    type: String,
    required: true,
  },
  importent_eventshin: {
    type: Array,
    required: true,
  },
  questionshin: {
    que: { type: Array, required: true },
    a: { type: Array, required: true },
    b: { type: Array, required: true },
    c: { type: Array, required: true },
    d: { type: Array, required: true },
    answer: { type: Array, required: true },
  },
  hindipdf_url:{
    type:String,
    required:true
  },

  
  dateeng:{
    type: String,
    required:true
  },
  image_urleng: {
    type: String,
    required: true,
  },
  heading_firsteng: {
    type: String,
    required: true,
  },
  heading_secondeng: {
    type: String,
    required: true,
  },
  heading_thirdeng: {
    type: String,
    required: true,
  },
  importent_eventseng: {
    type: Array,
    required: true,
  },
  questionseng: {
    eng_que: { type: Array, required: true },
    eng_a: { type: Array, required: true },
    eng_b: { type: Array, required: true },
    eng_c: { type: Array, required: true },
    eng_d: { type: Array, required: true },
    eng_answer: { type: Array, required: true },
  },
  englishpdf_url: {
    type: String,
    required: true
  }
});

const BLOG_DATA = new mongoose.model("blod_data", blogSchema);
module.exports = BLOG_DATA;
