/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('t_genie', {
		id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		track_code: {
			type: DataTypes.STRING(45),
			allowNull: false,
			references: {
				model: {
					tableName: 't_list',
				},
				key: 'track_code'
			}
		},
		year: {
			type: DataTypes.INTEGER(4).UNSIGNED,
			allowNull: false
		},
		month: {
			type: DataTypes.INTEGER(2).UNSIGNED,
			allowNull: false
		},
		day: {
			type: DataTypes.INTEGER(2).UNSIGNED,
			allowNull: false
		},
		st: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false
		},
		dl: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false
		},
		royalty: {
			type: DataTypes.FLOAT,
			allowNull: true
		}
	}, {
		sequelize,
		tableName: 't_genie',
		timestamps: false
	});
};
