define(["require", "exports", '../../Enums/SlideType', '../../utils/Helpers'], function (require, exports, SlideType, Utils) {
    var SlideTitleWithImage = (function () {
        function SlideTitleWithImage(title, presentationId, imagePath) {
            this.slideType = SlideType.TitleWithImage;
            this.id = Utils.GetId();
            this.title = title;
            this.presentationId = presentationId;
            this.imagePath = imagePath;
        }
        return SlideTitleWithImage;
    })();
    return SlideTitleWithImage;
});
//# sourceMappingURL=SlideTitleWithImage.js.map