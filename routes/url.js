const express=require("express");
const {generateNewShortURL}=require("../controllers/url");
const router=express.Router();
router.delete("/:shortId", async (req, res) => {
  const { shortId } = req.params;
  const result = await URL.deleteOne({ shortId });

  if (result.deletedCount === 0) {
    return res.status(404).json({ error: "Short URL not found" });
  }

  return res.json({ message: "Short URL deleted successfully" });
});


router.post("/",generateNewShortURL);
module.exports=router;