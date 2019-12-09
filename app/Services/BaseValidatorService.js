/** Base class validator
 * @author Leuther Mojica
 * @copyright TMJ Engineers 2018
 */
const Antl = use("Antl");
class BaseValidatorService {
  getRules() {
    if (!this.rules) return;
    let rules = this.rules;
    let collectionOfRules = [];
    let arrOfRules = [];
    Object.entries(rules).forEach(([key, value]) => {
      value = value
        .replace(/\s+/g, "")
        .split("|")
        .map(rule => {
          arrOfRules = rule.split(":");
          collectionOfRules.push({
            field: key,
            rule: arrOfRules[0],
            value: arrOfRules[1]
          });
        });
    });
    return collectionOfRules;
  }

  getMessage(collectionOfRules) {
    let objOfMessages = {};
    collectionOfRules.forEach(setOfRules => {
      objOfMessages[
        setOfRules.field + "." + setOfRules.rule
      ] = Antl.formatMessage("general-validation." + setOfRules.rule, {
        field: this.labelTranslation[setOfRules.field] || setOfRules.field,
        value: setOfRules.value
      });
    });

    return objOfMessages;
  }

  get messages() {
    let collectionOfRules = this.getRules();
    return this.getMessage(collectionOfRules);
  }

  get validateAll() {
    return true;
  }

  async fails(errorMessages) {
    return this.ctx.response.send(errorMessages);
  }
}

module.exports = BaseValidatorService;
