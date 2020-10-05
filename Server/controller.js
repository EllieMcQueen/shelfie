module.exports = {
    create: (req, res, next) => {
      const db = req.app.get('db');
      const { name, price, url } = req.body;
  
      db.create_product([name, price, url])
        .then(() => res.sendStatus(200))
        .catch(err => {
          res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
          console.log(err)
        });
    },
  
  
    update: (req, res, next) => {
      const db = req.app.get('db');
      const { params, query } = req;
  
      db.update_product([params.id, query.desc])
        .then(() => res.sendStatus(200))
        .catch(err => {
          res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
          console.log(err)
        });
    },
  
    delete: (req, res, next) => {
      const db = req.app.get('db');
      const { id } = req.params;
  
      db.delete_product(id)
        .then(() => res.sendStatus(200))
        .catch(err => {
          res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
          console.log(err)
        });
    },
    get:(req, res, next)=> {
        const db = req.app.get('db');

        db.get_all().then(all => res.status(200).send(all))
        .catch(err=> {
            res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
          console.log(err)
        });
    }
  };