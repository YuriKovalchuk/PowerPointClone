var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'SlideBase'], function (require, exports, ISlideBase) {
    var SlideBase = ISlideBase.SlideBase;
    var SlideWithTitleOnly = (function (_super) {
        __extends(SlideWithTitleOnly, _super);
        function SlideWithTitleOnly() {
            _super.apply(this, arguments);
            this.slideType = SlideBase.SlideType.TitleOnly;
        }
        return SlideWithTitleOnly;
    })(SlideBase.ISlideBase);
    return SlideWithTitleOnly;
});
//# sourceMappingURL=SlideWithTitleOnly.js.map