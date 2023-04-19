const connection = require('../../config/database');

/* OBTENER TODOS LOS USUARIOS */
const getAllUsersInfo = () => {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM userInfo';
      connection.query(sql, (error, results) => {
        if (error) {
          console.error('Error al obtener los usuarios: ', error);
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  };
/* OBTENER UN USUARIO */
const getOneUserInfo = (userId) => {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM userInfo WHERE idUser = ?';
      connection.query(sql, [userId], (error, results) => {
        if (error) {
          console.error('Error al obtener los usuarios: ', error);
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  };

  const getOnePrediction = (userId) => {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT idUser, trainingPrediction, caloriesPrediction FROM userInfo WHERE idUser = ?';
      connection.query(sql, [userId], (error, results) => {
        if (error) {
          console.error('Error al obtener los usuarios: ', error);
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  };
  
  const createUserInfo = (userInfo) => {
    return new Promise((resolve, reject) => {
      const sql = `insert into userInfo(
      idUser,age,height,weight,gender,
      bodyMassIndex,bodyFat,leanFat,
      physicalState,health,feedingHabits,fruits,vegetables,
      water,physicalActivity,reasonMusclesIncrease,reasonMusclesDefinition,reasonWeightloss,
      reasonHealth,levelPreferred,areaPreferred,areaFocus,timeAvailability,
      gymAccess,expStrenght,expCardiovascular,areaAbdominals,areaArms,
      areaCardio,areaBack,areaChest,areaLegs,effectiveness,
      trainingDays,trainingHours,constantTraining,sleepingHours,productNothing,
      productCreatina,productPreTraining,productProtein,productOthers,energy1,energy2,
      activityFactor,trainingPrediction,caloriesPrediction
     ) VALUES (
      ?,?,?,?,?,
      null,null,null,
      ?,?,?,?,?,
      ?,?,?,?,?,
      ?,?,?,?,?,
      ?,?,?,?,?,
      ?,?,?,?,?,
      ?,?,?,?,?,
      ?,?,?,?,?,?,
      null,null,null)`;
      connection.query(sql, [userInfo.idUser, userInfo.age, userInfo.height, userInfo.weight, userInfo.gender,
                            userInfo.physicalState, userInfo.health, userInfo.feedingHabits, userInfo.fruits, userInfo.vegetables, 
                            userInfo.water, userInfo.physicalActivity, userInfo.reasonMusclesIncrease,userInfo.reasonMusclesDefinition,userInfo.reasonWeightloss,
                            userInfo.reasonHealth, userInfo.levelPreferred, userInfo.areaPreferred, userInfo.areaFocus,userInfo.timeAvailability, 
                            userInfo.gymAccess, userInfo.expStrenght, userInfo.expCardiovascular, userInfo.areaAbdominals,userInfo.areaArms, 
                            userInfo.areaCardio, userInfo.areaBack, userInfo.areaChest, userInfo.areaLegs, userInfo.effectiveness, 
                            userInfo.trainingDays,userInfo.trainingHours,userInfo.constantTraining,userInfo.sleepingHours,userInfo.productNothing,
                            userInfo.productCreatina,userInfo.productPreTraining,userInfo.productProtein,userInfo.productOthers,userInfo.energy1,userInfo.energy2
                          ], (error, results) => {
        if (error) {
          console.error('Error al crear el usuario: ', error);
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  };
  
  const updateUserInfo = (user, id) => {
    return new Promise((resolve, reject) => {
      const sql = `UPDATE users SET user = ?, firstName = ?, LastName = ?, mail = ?, password = ?, birthday = ? WHERE id = ?`;
      connection.query(sql, [user.userN, user.firstName, user.lastName, user.mail, user.password, user.birthday, id], (error, results) => {
        if (error) {
          console.error('Error al actualizar el usuario: ', error);
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  };

  const updateTrainingPrediction = (user, id) => {
    return new Promise((resolve, reject) => {
      const sql = `UPDATE userInfo SET trainingPrediction = ? where idUser = ?`;
      connection.query(sql, [user.trainingPrediction,id], (error, results) => {
        if (error) {
          console.error('Error al actualizar la prediccion: ', error);
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  };

  const updateCaloriesPrediction = (user, id) => {
    return new Promise((resolve, reject) => {
      const sql = `UPDATE userInfo SET caloriesPrediction = ? where idUser = ?`;
      connection.query(sql, [user.caloriesPrediction,id], (error, results) => {
        if (error) {
          console.error('Error al actualizar la prediccion: ', error);
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  };
  
const deleteUserInfo = (userId) => {
    return new Promise((resolve, reject) => {
      const sql = 'DELETE FROM userInfo WHERE idUser = ?';
      connection.query(sql, [userId], (error, results) => {
        if (error) {
          console.error('Error al obtener los usuarios: ', error);
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  };

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