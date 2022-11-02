class NewsSide {
    /**[GET] / news */
    index(req, res) {
        res.render('index', {
            res: res,
        });
    }

    /**[GET] / news/:plugs */
    buynow(req, res) {
        res.render('buynow');
    }

    contactus(req, res) {
        res.render('contactus');
    }

    teaFactsCssDesign1(req, res) {
        res.render('teaFactsCssDesign1');
    }

    teaFactsCssDesign2(req, res) {
        res.render('teaFactsCssDesign2');
    }

    teamanufacturers(req, res) {
        res.render('teamanufacturers');
    }

    typesoftea(req, res) {
        res.render('typesoftea');
    }
}

module.exports = new NewsSide();