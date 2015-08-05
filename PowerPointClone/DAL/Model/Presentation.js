define(["require", "exports", '../../utils/Helpers'], function (require, exports, HelpersModule) {
    var Helper = HelpersModule.Helpers;
    var PresentationModel;
    (function (PresentationModel) {
        var Presentation = (function () {
            function Presentation() {
                //get id(): string {
                //    return this._id;
                //}
                this.slides = [];
                this.id = 'presentation-' + Helper.GetId();
            }
            return Presentation;
        })();
        PresentationModel.Presentation = Presentation;
    })(PresentationModel || (PresentationModel = {}));
    return PresentationModel;
});
//# sourceMappingURL=Presentation.js.map