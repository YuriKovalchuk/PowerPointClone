define(["require", "exports"], function (require, exports) {
    var Helpers;
    (function (Helpers_1) {
        var Helpers = (function () {
            function Helpers() {
            }
            //Generate unique Id for slide
            Helpers.GetId = function () {
                return Math.random().toString(36).substring(2, 15) +
                    Math.random().toString(36).substring(2, 15);
            };
            Helpers.GetNumberId = function () {
                Helpers.id++;
                return Helpers.id.toString();
            };
            Helpers.id = 0;
            return Helpers;
        })();
        Helpers_1.Helpers = Helpers;
    })(Helpers || (Helpers = {}));
    return Helpers;
});
//# sourceMappingURL=Helpers.js.map