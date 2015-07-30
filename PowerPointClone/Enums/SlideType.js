define(["require", "exports"], function (require, exports) {
    var Enums;
    (function (Enums) {
        (function (SlideType) {
            SlideType[SlideType["TitleOnly"] = 0] = "TitleOnly";
            SlideType[SlideType["TitleWithImage"] = 1] = "TitleWithImage";
            SlideType[SlideType["TitleWithText"] = 2] = "TitleWithText";
        })(Enums.SlideType || (Enums.SlideType = {}));
        var SlideType = Enums.SlideType;
    })(Enums || (Enums = {}));
    return Enums;
});
//# sourceMappingURL=SlideType.js.map