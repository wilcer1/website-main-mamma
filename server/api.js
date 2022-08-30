const router = require("express").Router();
const Booking = require("./Model/bookingschema");

function formatDateTime(json){
    datetimeformatted = []
    json.map((element) => {
        var temp = element.datetime.split("_");
        datetimeformatted.push({
          date: temp[0],
          time: temp[1]
        });

      });
      return datetimeformatted
}

router.post("/book", async (req, res) => {

   
    const booking = await Booking.findOneAndUpdate({"datetime": RegExp(req.body.datetime), booked: false}, {booked: true})
    
    if(booking == null) {
        res.send("Error, date/time not available")
    }else{
        res.json(booking);

    }


});


router.get("/getAvailable", async (req, res)=> {
    available = await Booking.find({booked: false});

    res.json(formatDateTime(available));

});

router.get("/availableForDate", async (req, res)=> {
    console.log(req.query.date + "ewqeqwewqeqw3eqw");
    available = await Booking.find({"datetime": RegExp(req.query.date), booked: false})
    console.log(available);
    res.json(formatDateTime(available))
 
});

router.post("/setAvailable", async (req, res) => {
    console.log(req.body.datetime);
    const available = new Booking(
    { 
        datetime: req.body.datetime
        
    });
    try{
        
        const setAvailable = await available.save();
        res.json(setAvailable);
    }catch (err) {
        console.log(err);
        res.status(400).json(err);
    }

})

router.get("/bookings", async (req, res) => {
    bookings = await Booking.find({booked: true});
    res.json(bookings);

});


router.post("/fillday", async (req, res) => {
    
})











module.exports = router;