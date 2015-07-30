var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", '../Model/SlideBase', '../../Enums/SlideType'], function (require, exports, Slide, EnumsModule) {
    var Slides;
    (function (Slides) {
        var SlideTitleWithImage = (function (_super) {
            __extends(SlideTitleWithImage, _super);
            function SlideTitleWithImage(title, imagePath) {
                this.slideType = EnumsModule.SlideType.TitleWithImage;
                this.imagePath = imagePath;
                _super.call(this, this.slideType, title);
            }
            return SlideTitleWithImage;
        })(Slide.SlideBase);
        Slides.SlideTitleWithImage = SlideTitleWithImage;
    })(Slides || (Slides = {}));
    return Slides;
});
//# sourceMappingURL=SlideTitleWithImage.js.map