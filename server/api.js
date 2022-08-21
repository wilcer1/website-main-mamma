const router = require("express").Router();
const Booking = require("./Model/bookingschema");



router.post("/book", async (req, res) => {

    const booking = new Booking(
        {
            name: req.body.name,
            email: req.body.email,
            date: req.body.date
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

router.get("/bookings", async (req, res) => {
    bookings = await Booking.find();
    res.json(bookings);

});











module.exports = router;