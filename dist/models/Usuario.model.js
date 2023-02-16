"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const sequelize_1 = require("sequelize");
const config_database_1 = require("../database/config.database");
const Role_model_1 = require("./Role.model");
exports.Usuario = config_database_1.db.define('Usuario', {
    usuarioid: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    correo: {
        type: sequelize_1.DataTypes.STRING
    },
    password: {
        type: sequelize_1.DataTypes.STRING
    },
    estatus: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    roleid: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: Role_model_1.Role,
            key: 'roleid'
        },
        defaultValue: 2
    }
    // role: {
    //     type: DataTypes.STRING,
    //     references: {
    //         model: Role,
    //         key: 'role'
    //     },
    //     defaultValue: 'USER_ROLE'
    // }
}, {
    timestamps: false
});
const initUsuario = () => __awaiter(void 0, void 0, void 0, function* () {
    yield exports.Usuario.sync();
});
initUsuario();
// Usuario.belongsTo(Role, { foreignKey: 'role', targetKey: 'role' });
//# sourceMappingURL=Usuario.model.js.map