const { Router } = require('express');
const router = Router();

const fetch = require('node-fetch');



router.get('/search', async (req, res) => {
    const query = req.query.query;
    const offset = req.query.offset;
    const sort = req.query.sort;
    const ITEM = req.query.ITEM_CONDITION;
    const api_url = `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=30&offset=${offset}&sort=${sort}&ITEM_CONDITION=${ITEM}`
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    res.json(json)
});
router.get('/products/:id', async (req, res) => {
    id = req.params.id;
    const api_url = `https://api.mercadolibre.com/items/${id}`
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    res.json(json)
});



module.exports = router;