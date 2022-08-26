const router = require("express").Router();
const Booking = require("./Model/bookingschema");
const Available = require("./Model/availableschema");



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