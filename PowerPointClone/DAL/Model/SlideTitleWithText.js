var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'SlideBase', '../../Enums/SlideType'], function (require, exports, ISlideBase, SlideType) {
    var SlideTitleWithText = (function (_super) {
        __extends(SlideTitleWithText, _super);
        function SlideTitleWithText() {
            _super.apply(this, arguments);
            this.slideType = SlideType.TitleWithText;
        }
        return SlideTitleWithText;
    })(ISlideBase);
    return SlideTitleWithText;
});
//# sourceMappingURL=SlideTitleWithText.js.map