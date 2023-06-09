const usersService = require('../services/usersService')

const getAllUsers = (req, res) => {
    usersService.getAllUsers()
      .then((results) => {
        res.send(results);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send('Error al obtener los usuarios');
      });
  };

const getOneUser = (req, res) =>{
    console.log("user");
    usersService.getOneUser(req.params.userId)
    .then((result) => {
        res.send(result);
    })
    .catch((error) => {
        console.error(error);
        res.status(500).send('Error al obtener los usuarios');
      })
    
}

const getuserID = (req, res) =>{
  console.log("user");
  usersService.getuserID(req.params.user)
  .then((result) => {
      res.send(result);
  })
  .catch((error) => {
      console.error(error);
      res.status(500).send('Error al obtener los usuarios');
    })
  
}

const login = (req, res) =>{
  console.log(req.params.user)
  console.log("login")
  usersService.login(req.params.user, req.params.password)
  .then((result) => {
      res.send(result);
  })
  .catch((error) => {
      console.error(error);
      res.status(500).send('Error al obtener los usuarios');
    })
  
}

const createUser = (req, res) => {
    const newUser = req.body;
    usersService.createUser(newUser)
      .then((result) => {
        res.send(result);
      })
      .catch((error) => {
        console.error('Error al crear el usuario: ', error);
        res.status(500).send('Error al crear el usuario');
      });
  };

const updateUser = (req, res) => {
  const newUser = req.body;
  console.log(newUser);
  usersService.updateUser(newUser, req.params.userId)
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      console.error('Error al actualizar el usuario: ', error);
      res.status(500).send('Error al actualizar el usuario');
    });
}

const deleteUser = (req, res) =>{
    usersService.deleteUser(req.params.userId)
    .then((result) => {
        res.send(result);
    })
    .catch((error) => {
        console.error(error);
        res.status(500).send('Error al obtener los usuarios');
      })
    
}
module.exports = {
    getAllUsers,
    getOneUser,
    login,
    createUser,
    updateUser,
    deleteUser,
    getuserID
}