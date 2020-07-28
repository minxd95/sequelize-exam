/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('t_list', {
		album_code: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		album_name: {
			type: DataTypes.STRING(200),
			allowNull: false
		},
		track_code: {
			type: DataTypes.STRING(45),
			allowNull: false,
			primaryKey: true
		},
		track_name: {
			type: DataTypes.STRING(200),
			allowNull: false
		},
		artist: {
			type: DataTypes.STRING(100),
			allowNull: false
		}
	}, {
		sequelize,
		tableName: 't_list',
		timestamps: false
	});
};
