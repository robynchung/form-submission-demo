const moment = require("moment");
const constants = require("../constants");

exports.validation = function (type, value) {
  const { date, eMail, phone, text } = constants.inputType;

  const eMailRegex = /^[a-zA-Z0-9.!#$%&’*+\=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gim;
  const textRegex = /^([^0-9]*)$/gim;
  const phoneRegex = /[\d][\d][\d][\s]?[-]?[\d][\d][\d][\s]?[-]?[\d][\d][\d][\d]/gim;

  switch (type) {
    case date:
      return moment(value).isValid();

    case eMail:
      return eMailRegex.test(value);

    case text:
      return textRegex.test(value);

    case phone:
      return phoneRegex.test(value);

    default:
      return false;
  }
};
