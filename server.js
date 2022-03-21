const express = require("express");
const res = require("express/lib/response");
const app = express();
const port = 9000;

// app.get("/api/test", (req,res)=>{
//     res.json({message: "hey it's eric"})
// })

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

require("./server/routes/sundae.routes")(app);

app.listen(port,()={console.log(`running on port: ${port}`)});
