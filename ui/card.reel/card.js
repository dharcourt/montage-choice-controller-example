var AbstractCheckbox = require("montage/ui/base/abstract-checkbox").AbstractCheckbox;

exports.Checkbox = AbstractCheckbox.specialize(/** @lends Checkbox */{
    constructor: {
        value: function Checkbox() {
            this.super();
        }
    }
});
