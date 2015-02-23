/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },

    cards: {
        value: [
            {description: "S1"}, {description: "H1"}, {description: "D1"},{description: "C1"},
            {description: "S2"}, {description: "H2"}, {description: "D2"},{description: "C2"},
            {description: "S3"}, {description: "H3"}, {description: "D3"},{description: "C3"},
            {description: "S4"}, {description: "H4"}, {description: "D4"},{description: "C4"},
            {description: "S5"}, {description: "H5"}, {description: "D5"},{description: "C5"},
            {description: "S6"}, {description: "H6"}, {description: "D6"},{description: "C6"},
            {description: "S7"}, {description: "H7"}, {description: "D7"},{description: "C7"},
            {description: "S8"}, {description: "H8"}, {description: "D8"},{description: "C8"},
            {description: "S9"}, {description: "H9"}, {description: "D9"},{description: "C9"},
            {description: "ST"}, {description: "HT"}, {description: "DT"},{description: "CT"},
            {description: "SJ"}, {description: "HJ"}, {description: "DJ"},{description: "CJ"},
            {description: "SQ"}, {description: "HQ"}, {description: "DQ"},{description: "CQ"},
            {description: "SK"}, {description: "HK"}, {description: "DK"},{description: "CK"}
        ]
    }
});
