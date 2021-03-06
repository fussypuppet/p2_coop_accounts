'use strict'
const bcrypt = require('bcrypt');
module.exports = function(sequelize, DataTypes) {
    const user = sequelize.define('user', {
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: {
                    msg: 'Invalid email address'
                }
            }
        },
        name: {
            type: DataTypes.STRING,
            validate: { // validation of name length isn't particular important, but this illustrates length validation
                len: {
                    args: [1, 99],
                    msg: "Name must be between 1 and 99 characters"
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            validate: {
                len: {
                    args: [8, 99],
                    msg: "Password must be between 8 and 99 characters"  // can also use hooks below or html form for validation
                }
            }
        },
        isAdministrator: {
            type: DataTypes.BOOLEAN
        },
        shareholderId: {
            type: DataTypes.INTEGER
        }

    }, {
        hooks: {
            beforeBulkUpdate: function(updatedUser, options){
                if (updatedUser && updatedUser.attributes.password){
                    let hash = bcrypt.hashSync(updatedUser.attributes.password, 12)
                    updatedUser.attributes.password = hash;
                }
            },
            //hash user-inputted pw before record creation
            beforeCreate: function(createdUser, options){  // cannot use arrow functions here since 'this' keyword is used behind the scenes
                if (createdUser && createdUser.password){
                    let hash = bcrypt.hashSync(createdUser.password, 12) // can pass it a salt(string) or 'rounds', a number of times to run the hash function
                    createdUser.password = hash;
                }
            }

        }
    })
    user.associate = function(models){
        models.user.hasOne(models.shareholder)
    }
    user.prototype.validPassword = function(passwordTyped) {
        return bcrypt.compareSync(passwordTyped, this.password);
    }
    // remove password before any serialization of User object
    user.prototype.toJSON = function() {
        let userData = this.get();
        delete userData.password;
        return userData;
    }
    return user;
}