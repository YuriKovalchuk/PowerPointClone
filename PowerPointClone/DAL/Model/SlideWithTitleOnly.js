define(["require", "exports", '../../Enums/SlideType', '../../utils/Helpers'], function (require, exports, SlideType, Utils) {
    var SlideWithTitleOnly = (function () {
        function SlideWithTitleOnly(title, presentationId) {
            this.slideType = SlideType.TitleWithText;
            this.id = Utils.GetId();
            this.title = title;
            this.presentationId = presentationId;
        }
        return SlideWithTitleOnly;
    })();
    return SlideWithTitleOnly;
});
//# sourceMappingURL=SlideWithTitleOnly.js.map