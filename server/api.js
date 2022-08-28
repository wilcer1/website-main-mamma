const router = require("express").Router();
const Booking = require("./Model/bookingschema");
const Available = require("./Model/availableschema");

function formatDateTime(json){
    datetimeformatted = []
    available.map((element) => {
        var temp = element.datetime.split("_");
        datetimeformatted.push({
          date: temp[0],
          time: temp[1]
        });

      });
      return datetimeformatted
}

router.post("/book", async (req, res) => {

    const booking = new Booking(
        {
            name: req.body.name,
            email: req.body.email,
            datetime: req.body.datetime
            
        }
    )

    try{
        
        const bookingres = await booking.save();
        res.json(bookingres);
    }catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});


router.get("/getAvailable", async (req, res)=> {
    available = await Available.find();

    res.json(formatDateTime(available));

});

router.get("/availableForDate", async (req, res)=> {
    available = await Available.find({"datetime": new RegExp(req.query.date)})
    res.json(formatDateTime(available))
 
});

router.post("/setAvailable", async (req, res) => {
    const available = new Available(
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
    bookings = await Booking.find();
    res.json(bookings);

});











module.exports = router;