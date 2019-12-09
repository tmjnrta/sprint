module.exports = {
  validation: {
    required: "{field} is required",
    unique: "{field} is already used",
    min: "{field} should have at least {value} characters",
    max: "{field} of characters exceeded {value} characters",
    equals: "{field} do not match!",
    email: "Please use a valid email",
    exists: "{field} do not exist",
    general_exists: "The selected data doesn't exist in the database.",
    in: "Unauthorized Access",
    required_when: "{field} is required when {value}",
    url: "{field} is not a valid URL",
    json:
      'Please enter a valid json data for {field}. e.g. \\{ "key": "value" \\}'
  }
};
