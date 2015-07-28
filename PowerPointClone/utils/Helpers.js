define(["require", "exports"], function (require, exports) {
    var Helpers = (function () {
        function Helpers() {
        }
        //Generate uique Id for slide
        Helpers.GetId = function () {
            return Math.random().toString(36).substring(2, 15) +
                Math.random().toString(36).substring(2, 15);
        };
        return Helpers;
    })();
    return Helpers;
});
//# sourceMappingURL=Helpers.js.map