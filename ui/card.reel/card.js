var AbstractCheckbox = require("montage/ui/base/abstract-checkbox").AbstractCheckbox;

exports.Card = AbstractCheckbox.specialize(/** @lends Card */{
    constructor: {
        value: function Card() {
            this.super();
        }
    }
});
