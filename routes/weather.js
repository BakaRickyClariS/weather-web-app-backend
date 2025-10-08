const express = require("express");
const router = express.Router();
const weatherController = require("../controllers/weatherController");

// 取得台中市天氣預報（一週）
router.get("/taichung", weatherController.getTaichungWeather);

// 測試接口 - 檢查環境變數是否正確設定
router.get("/test-env", (_req, res) => {
  const apiKey = process.env.CWA_API_KEY;

  if (!apiKey) {
    return res.status(500).json({
      success: false,
      message: "❌ 環境變數未設定",
      hint: "請在 Zeabur 設定 CWA_API_KEY 環境變數",
    });
  }

  // 只顯示前 8 碼和後 4 碼，中間用 * 隱藏
  const maskedKey = apiKey.length > 12
    ? `${apiKey.substring(0, 8)}${"*".repeat(apiKey.length - 12)}${apiKey.substring(apiKey.length - 4)}`
    : "***";

  res.json({
    success: true,
    message: "✅ 環境變數設定成功",
    apiKey: maskedKey,
    keyLength: apiKey.length,
  });
});

module.exports = router;
