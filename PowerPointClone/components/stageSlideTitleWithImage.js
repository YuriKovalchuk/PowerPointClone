///<reference path="../lib/_references.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'react/addons'], function (require, exports, React) {
    var StageSlideTitleWithImage = (function (_super) {
        __extends(StageSlideTitleWithImage, _super);
        function StageSlideTitleWithImage() {
            _super.apply(this, arguments);
        }
        StageSlideTitleWithImage.prototype.render = function () {
            var imageStyling = {
                height: "480px",
                position: "relative",
                left: "0px"
            };
            return React.jsx("\n            <div className=\"col-xs-12\">\n                <form>\n                  <div className=\"form-group space-top55\">\n                    <input type=\"email\" className=\"form-control title-input\" id=\"title-content\" placeholder=\"Click to add Title\" />\n                  </div>\n                  <div className=\"form-group space-top55\">\n                      <img src=\"http://placekitten.com/1200/1200\" title=\"Image\" style={imageStyling} />\n                  </div>\n                </form>\n            </div>\n         ");
        };
        return StageSlideTitleWithImage;
    })(React.Component);
    return StageSlideTitleWithImage;
});
//# sourceMappingURL=stageSlideTitleWithImage.js.map