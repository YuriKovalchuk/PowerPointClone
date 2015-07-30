var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", '../Model/SlideBase', '../../Enums/SlideType'], function (require, exports, SlideBase, EnumsModule) {
    var Slides;
    (function (Slides) {
        var SlideTitleWithText = (function (_super) {
            __extends(SlideTitleWithText, _super);
            function SlideTitleWithText(title, content) {
                this.slideType = EnumsModule.SlideType.TitleWithText;
                this.content = content;
                _super.call(this, this.slideType, title);
            }
            return SlideTitleWithText;
        })(SlideBase.SlideBase);
        Slides.SlideTitleWithText = SlideTitleWithText;
    })(Slides || (Slides = {}));
    return Slides;
});
//# sourceMappingURL=SlideTitleWithText.js.map