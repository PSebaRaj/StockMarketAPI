import express from "express";

import {
  currPrice,
  currPriceChange,
  histClose,
  histOpen,
  histHigh,
  histLow,
  histVolume,
} from "./controllers.js";

const router = express.Router();

router.get("/:ticker/price", currPrice);
router.get("/:ticker/priceChange", currPriceChange);
router.get("/:ticker/hist/close", histClose);
router.get("/:ticker/hist/open", histOpen);
router.get("/:ticker/hist/high", histHigh);
router.get("/:ticker/hist/low", histLow);
router.get("/:ticker/hist/volume", histVolume);

export default router;
