define(["require", "exports", '../../utils/Helpers'], function (require, exports, Utils) {
    var PresentationModel;
    (function (PresentationModel) {
        var Presentation = (function () {
            function Presentation() {
                //get id(): string {
                //    return this._id;
                //}
                this.slides = [];
                this.id = 'presentation-' + Utils.GetId();
            }
            return Presentation;
        })();
        PresentationModel.Presentation = Presentation;
    })(PresentationModel || (PresentationModel = {}));
    return PresentationModel;
});
//# sourceMappingURL=Presentation.js.map