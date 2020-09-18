const { Router, response, query } = require('express');
const router = Router();

const fetch = require('node-fetch');



router.get('/search', async (req, res) => {
    const api_url = `https://api.mercadolibre.com/sites/MLA/search?q=${req.query.query}&limit=30&offset=${req.query.offset}&sort=${req.query.sort}&ITEM_CONDITION=${req.query.ITEM_CONDITION}`
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    res.json(json)
    console.log(req.query)
});
router.get('/products/:id', async (req, res) => {
    id = req.params.id
    const api_url = `https://api.mercadolibre.com/items/${id}`
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    res.json(json)
    console.log(req.params.id)
});



module.exports = router;