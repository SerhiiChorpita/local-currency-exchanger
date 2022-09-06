const fetch = require('node-fetch');

const url = 'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11';
const newNumForm = (num) => new Intl.NumberFormat('en-IN').format(num);

const router = app => {
    app.get('/', (req, res) => {
        res.send({
            message: 'Hey, your starting local page, works!'
        })
    });

    app.post('/', (req, res) => {
        data = req.body.amountToExchange
        fetch(url)
            .then((resp) => resp.json())
            .then(function (allData) {
                res.send(
                    allData.map(function (exchanges) {
                        return row = (`${newNumForm(data)} грн = buy: ${newNumForm((data / exchanges.buy).toFixed(0))} ${(exchanges.ccy).toString()}; sale: ${newNumForm((data / exchanges.sale).toFixed(0))} ${(exchanges.ccy).toString()}`);
                    }
                    )
                )
            })
            .catch(error => console.log(error))
    });
}


module.exports = router;