define(["require", "exports"], function (require, exports) {
    var SlideBase;
    (function (SlideBase) {
        (function (SlideType) {
            SlideType[SlideType["TitleOnly"] = 0] = "TitleOnly";
            SlideType[SlideType["TitleWithImage"] = 1] = "TitleWithImage";
            SlideType[SlideType["TitleWithText"] = 2] = "TitleWithText";
        })(SlideBase.SlideType || (SlideBase.SlideType = {}));
        var SlideType = SlideBase.SlideType;
        var ISlideBase = (function () {
            function ISlideBase() {
            }
            return ISlideBase;
        })();
        SlideBase.ISlideBase = ISlideBase;
    })(SlideBase = exports.SlideBase || (exports.SlideBase = {}));
});
//# sourceMappingURL=SlideBase.js.map