"use strict";

function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10; // caps communicates the intent that this is a constant!
  this.powerSavingModeOn = true;
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE; // this is where the property of the object is stored
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
};

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  if (this.isMaximumTemperature()) {
    return;
  }
  this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if (this.isMinimumTemperature()) {
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype.isMinimumTemperature = function() { // 'is' at the beginning of the function tells us to expect a boolean
  return this.temperature === this.MINIMUM_TEMPERATURE; // 'is it the same? true or false?'
};

Thermostat.prototype.isMaximumTemperature = function() {
  if(this.isPowerSavingModeOn() === false) {
    return this.temperature === this.MAX_LIMIT_PSM_OFF;
  }
  return this.temperature === this.MAX_LIMIT_PSM_ON;
}

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingModeOn === true;
};

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this.powerSavingModeOn = false;
}

Thermostat.prototype.switchPowerSavingModeOn = function() {
  this.powerSavingModeOn = true;
}

Thermostat.prototype.resetTemperature = function() {
  this.temperature = this.DEFAULT_TEMPERATURE;
}

Thermostat.prototype.energyUsage = function() {
  if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
    return "low-usage";
  }
  if (this.temperature >= this.MEDIUM_ENERGY_USAGE_LIMIT && this.temperature <= this.MAX_LIMIT_PSM_ON) {
    return "medium-usage";
  }
  return "high-usage";
};
