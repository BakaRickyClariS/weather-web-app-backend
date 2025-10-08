const express = require("express");
const router = express.Router();
const weatherController = require("../controllers/weatherController");

// 取得高雄天氣預報
router.get("/kaohsiung", weatherController.getKaohsiungWeather);

module.exports = router;
