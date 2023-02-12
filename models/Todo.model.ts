import { DataTypes, Model } from 'sequelize';

import { Usuario } from './Usuario.model';
import { db } from '../database/config.database';

class TodoModel extends Model {
    declare todoId: number
    declare description: string
    declare estatus: boolean
    declare usuarioid: number
}

const Todo = db.define<TodoModel>('Todo', {

    todoId: {
        type: DataTypes.STRING,
        primaryKey: true
    },

    description: {
        type: DataTypes.STRING,
    },

    estatus: {
        type: DataTypes.BOOLEAN
    },

    usuarioid: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
            key: 'id' 
        }
    }

}, {
    timestamps: false
});



const initTodo = async() => {
    await Todo.sync();
}
initTodo();
Usuario.hasMany(Todo);