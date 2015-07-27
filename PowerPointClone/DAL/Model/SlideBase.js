define(["require", "exports"], function (require, exports) {
    var SlideBase = (function () {
        function SlideBase(slideType, title, presentationId) {
            this.slideType = slideType;
            this.id = this.GetId();
            this.title = title;
            this.presentationId = presentationId;
        }
        SlideBase.prototype.GetId = function () {
            return Math.random().toString(36).substring(2, 15) +
                Math.random().toString(36).substring(2, 15);
        };
        return SlideBase;
    })();
    return SlideBase;
});
//# sourceMappingURL=SlideBase.js.map