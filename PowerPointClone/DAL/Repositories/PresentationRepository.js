define(["require", "exports", '../Model/Presentation'], function (require, exports, Model) {
    var Presentation = Model.Presentation;
    var PresentationDb;
    (function (PresentationDb) {
        var PresentationReposiotry = (function () {
            function PresentationReposiotry() {
            }
            PresentationReposiotry.prototype.Add = function (presentation) {
                localStorage.setItem(presentation.id, JSON.stringify(presentation));
            };
            PresentationReposiotry.prototype.GetCurrentPresentation = function () {
                for (var i = 0; i < localStorage.length; i++) {
                    if (localStorage.key(i).indexOf("presentation-") == 0) {
                        return this.Get(localStorage.key(i));
                    }
                }
                return new Presentation();
            };
            PresentationReposiotry.prototype.Get = function (id) {
                var presentationRaw = localStorage.getItem(id);
                var presentation = JSON.parse(presentationRaw);
                return presentation;
            };
            PresentationReposiotry.prototype.Update = function (presentation) {
                this.Delete(presentation);
                localStorage.setItem(presentation.id, JSON.stringify(presentation));
            };
            PresentationReposiotry.prototype.Delete = function (presentation) {
                localStorage.removeItem(presentation.id);
            };
            return PresentationReposiotry;
        })();
        PresentationDb.PresentationReposiotry = PresentationReposiotry;
    })(PresentationDb || (PresentationDb = {}));
    return PresentationDb;
});
//# sourceMappingURL=PresentationRepository.js.map