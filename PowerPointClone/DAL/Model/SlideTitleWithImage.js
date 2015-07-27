var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'SlideBase', '../../Enums/SlideType'], function (require, exports, SlideBase, SlideType) {
    var SlideTitleWithImage = (function (_super) {
        __extends(SlideTitleWithImage, _super);
        function SlideTitleWithImage() {
            _super.apply(this, arguments);
            this.slideType = SlideType.TitleWithImage;
        }
        return SlideTitleWithImage;
    })(SlideBase);
    return SlideTitleWithImage;
});
//# sourceMappingURL=SlideTitleWithImage.js.map