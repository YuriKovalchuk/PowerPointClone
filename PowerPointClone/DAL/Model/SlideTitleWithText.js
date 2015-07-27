define(["require", "exports", '../../Enums/SlideType', '../../utils/Helpers'], function (require, exports, SlideType, Utils) {
    var SlideTitleWithText = (function () {
        function SlideTitleWithText(title, presentationId, content) {
            this.slideType = SlideType.TitleWithText;
            this.id = Utils.GetId();
            this.title = title;
            this.presentationId = presentationId;
            this.content = content;
        }
        return SlideTitleWithText;
    })();
});
//# sourceMappingURL=SlideTitleWithText.js.map