const userInfoService = require('../services/userInfoService')

const getAllUsersInfo = (req, res) => {
    userInfoService.getAllUsersInfo()
      .then((results) => {
        res.send(results);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send('Error al obtener los usuarios');
      });
  };

const getOneUserInfo = (req, res) =>{
    userInfoService.getOneUserInfo(req.params.userId)
    .then((result) => {
        res.send(result);
    })
    .catch((error) => {
        console.error(error);
        res.status(500).send('Error al obtener los usuarios');
      });
    
};

const getOnePrediction = (req, res) =>{
  userInfoService.getOnePrediction(req.params.userId)
  .then((result) => {
      res.send(result);
  })
  .catch((error) => {
      console.error(error);
      res.status(500).send('Error al obtener los usuarios');
    });
};

const createUserInfo = (req, res) => {
    const newUser = req.body;
    userInfoService.createUserInfo(newUser)
      .then((result) => {
        res.send(result);
      })
      .catch((error) => {
        console.error('Error al crear el usuario: ', error);
        res.status(500).send('Error al crear el usuario');
      });
  };

const updateUserInfo = (req, res) => {
  const newUser = req.body;
  console.log(newUser);
  userInfoService.updateUserInfo(newUser, req.params.userId)
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      console.error('Error al actualizar el usuario: ', error);
      res.status(500).send('Error al actualizar el usuario');
    });
}

const updateTrainingPrediction = (req, res) => {
  const update = req.body;
  userInfoService.updateTrainingPrediction(update, req.params.userId)
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      console.error('Error al actualizar el usuario: ', error);
      res.status(500).send('Error al actualizar el usuario');
    });
}
const updateCaloriesPrediction = (req, res) => {
  const update = req.body;
  userInfoService.updateCaloriesPrediction(update, req.params.userId)
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      console.error('Error al actualizar el usuario: ', error);
      res.status(500).send('Error al actualizar el usuario');
    });
}


const deleteUserInfo = (req, res) =>{
  userInfoService.deleteUserInfo(req.params.userId)
    .then((result) => {
        res.send(result);
    })
    .catch((error) => {
        console.error(error);
        res.status(500).send('Error al obtener los usuarios');
      })
    
}
module.exports = {
    getAllUsersInfo,
    getOneUserInfo,
    getOnePrediction,
    createUserInfo,
    updateUserInfo,
    updateTrainingPrediction,
    updateCaloriesPrediction,
    deleteUserInfo
}