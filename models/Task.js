const { v4: uuid } = require("uuid");

class Task {
  id = "";
  description = "";
  dateComplete = null;

  constructor(description) {
    this.id = uuid();
    this.description = description;
    this.dateComplete = null;
  }
}

module.exports = Task;
