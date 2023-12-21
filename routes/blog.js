const router = require("express").Router();


//Import modle route
const BLOG_SCHEMA = require("../models/blog");
let data = [];

router.post("/post", async (req, res) => {
  const blog_data = BLOG_SCHEMA({
    datehin             : req.body.datehin,
    image_urlhin        : req.body.image_urlhin,
    heading_firsthin    : req.body.heading_firsthin,
    heading_secondhin   : req.body.heading_secondhin,
    heading_thirdhin    : req.body.heading_thirdhin,
    importent_eventshin : req.body.importent_eventshin,

    questionshin: {
    que         : req.body.que,
    a           : req.body.a,
    b           : req.body.b,
    c           : req.body.c,
    d           : req.body.d,
    answer      : req.body.answer,
    },
    hindipdf_url : req.body.hindipdf_url,

    dateeng             : req.body.dateeng,
    image_urleng        : req.body.image_urleng,
    heading_firsteng    : req.body.heading_firsteng,
    heading_secondeng   : req.body.heading_secondeng,
    heading_thirdeng    : req.body.heading_thirdeng,
    importent_eventseng : req.body.importent_eventseng,

    questionseng: {
      eng_que       : req.body.eng_que,
      eng_a         : req.body.eng_a,
      eng_b         : req.body.eng_b,
      eng_c         : req.body.eng_c,
      eng_d         : req.body.eng_d,
      eng_answer    : req.body.eng_answer,
    },
    englishpdf_url: req.body.englishpdf_url
  });
  const data = await blog_data.save();  
  res.status(200).send(data);
});



router.get("/", async (req, res) => {
  const data = await BLOG_SCHEMA.find();
  res.render("blog", { data });
});

//Export This router to app.js
module.exports = router;
