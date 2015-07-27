var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'SlideBase'], function (require, exports, ISlideBase) {
    var SlideBase = ISlideBase.SlideBase;
    var SlideTitleWithImage = (function (_super) {
        __extends(SlideTitleWithImage, _super);
        function SlideTitleWithImage() {
            _super.apply(this, arguments);
            this.slideType = SlideBase.SlideType.TitleWithImage;
        }
        return SlideTitleWithImage;
    })(SlideBase.ISlideBase);
    return SlideTitleWithImage;
});
//# sourceMappingURL=SlideTitleWithImage.js.map