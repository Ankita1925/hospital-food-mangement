const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const cors = require('cors');
app.use(express.json()); // Add this to parse JSON request bodies
// const methodOverride = require("method-override");
const MONGO_URL = "mongodb://127.0.0.1:27017/Hospital_food";

app.use(cors({ origin: 'http://localhost:5173' }));
main()
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
const patientRoutes = require('./Routes/patientRoutes');
const DietChartRoutes = require('./Routes/DietChartRoutes');
const PantryStaffRoutes = require('./Routes/PantryStaffRoutes');
const deliveryRoutes = require('./Routes/deliveryRoutes');
const adminRoute = require('./Routes/adminRoute');
const mealRoute = require('./Routes/mealRoutes');

app.use('/api/patient', patientRoutes);
app.use('/api/diet-charts', DietChartRoutes);
app.use('/api/pantry-staff', PantryStaffRoutes);
app.use('/api/delivery', deliveryRoutes);
app.use('/api/admin', adminRoute);
app.use('/api/meal', mealRoute);
app.listen(8080, () => {
    console.log("server is listening to port 8080");
});