const { Model, DataTypes } = require('sequelize');

class Categorias extends Model {
    static init(connection) {
        super.init({
            nome: DataTypes.STRING,
            tipo: DataTypes.SMALLINT
        }, {
            sequelize: connection,
        })
    }

    static associate(models) {
        this.belongsTo(models.Usuario, { foreignKey: 'usuario_id', as: 'usuario2'});
    }
}

module.exports = Categorias;