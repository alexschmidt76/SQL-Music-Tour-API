'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stage_Event extends Model {
    static associate({ Event, Stage }) {
      // event
      Stage_Event.belongsTo(Event, {
        foreignKey: 'event_id',
        as: 'event'
      })

      // stage
      Stage_Event.belongsTo(Stage, {
        foreignKey: 'stage_id',
        as: 'stage'
      })
    }
  }
  Stage_Event.init({
    stage_event_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    stage_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Stage_Event',
    tableName: 'stage_events',
    timestamps: false
  });
  return Stage_Event;
};