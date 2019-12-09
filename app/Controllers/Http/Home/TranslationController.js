"use strict";

class TranslationController {
  async index({ antl, response }) {
    // to do: locale switching

    let translationData = {
      home: this._getHomeTranslation(antl),
      shared: this._getSharedTranslation(antl),
      login: this._getLoginTranslation(antl),
      register: this._getRegisterTranslation(antl),
      general: this._getGeneralTranslation(antl)
    };

    let translations =
      "translations = " + JSON.stringify(translationData) + ";";
    response.header("Content-type", "text/javascript");
    response.send(translations);
  }

  _getHomeTranslation(Antl) {
    return {
      home: Antl.get("home.home")
    };
  }

  _getGeneralTranslation(Antl) {
    return {
      validation: Antl.get("general-validation.validation")
    };
  }
  _getLoginTranslation(Antl) {
    return {
      login: Antl.get("login.label")
    };
  }
  _getRegisterTranslation(Antl) {
    return {
      register: Antl.get("register.label")
    };
  }

  _getSharedTranslation(Antl) {
    return {
      copyright: Antl.get("shared.copyright"),
      prompt: Antl.get("shared.prompt"),
      datatable: Antl.get("shared.datatable")
    };
  }
}

module.exports = TranslationController;
