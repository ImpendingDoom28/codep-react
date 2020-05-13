import React from "react";
import css from "./Console.module.css";

const Console = (props) => {
  const console = {
    __on: {},
    addEventListener: function (name, callback) {
      this.__on[name] = (this.__on[name] || []).concat(callback);
      return this;
    },
    dispatchEvent: function (name, value) {
      this.__on[name] = this.__on[name] || [];
      for (var i = 0, n = this.__on[name].length; i < n; i++) {
        this.__on[name][i].call(this, value);
      }
      return this;
    },
    log: function () {
      var a = [];
      // For V8 optimization
      for (var i = 0, n = arguments.length; i < n; i++) {
        a.push(arguments[i]);
      }
      this.dispatchEvent("log", a);
    },
  };

  return (
    <div className={css.wrapper}>
      <h2>Console</h2>
      <textarea readOnly={true} className={css.console}></textarea>
    </div>
  );
};

export default Console;
