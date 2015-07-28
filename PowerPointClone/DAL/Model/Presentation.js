define(["require", "exports", '../../utils/Helpers'], function (require, exports, Utils) {
    var PresentationModel;
    (function (PresentationModel) {
        var Presentation = (function () {
            function Presentation() {
                this._id = 'presentation-' + Utils.GetId();
                console.log(this._id);
            }
            Object.defineProperty(Presentation.prototype, "id", {
                get: function () {
                    return this._id;
                },
                enumerable: true,
                configurable: true
            });
            return Presentation;
        })();
        PresentationModel.Presentation = Presentation;
    })(PresentationModel || (PresentationModel = {}));
    return PresentationModel;
});
//# sourceMappingURL=Presentation.js.map