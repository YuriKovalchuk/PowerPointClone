define(["require", "exports", '../../utils/Helpers'], function (require, exports, Utils) {
    var Slide;
    (function (Slide) {
        var SlideBase = (function () {
            function SlideBase(slideType, title) {
                this.selected = false;
                this.slideType = slideType;
                this.id = Utils.GetId();
                this.title = title;
            }
            return SlideBase;
        })();
        Slide.SlideBase = SlideBase;
    })(Slide || (Slide = {}));
    return Slide;
});
//# sourceMappingURL=SlideBase.js.map