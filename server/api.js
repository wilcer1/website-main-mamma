const router = require("express").Router();
const Booking = require("./bookingschema");



router.post("/book", async (req, res) => {

    const booking = new Booking(
        {
            name: req.body.name,
            email: req.body.email,
            date: req.body.date
        }
    )

    const bookingres = await booking.save();
    res.json(bookingres);
});

router.get()











module.exports = router;