define(["require", "exports"], function (require, exports) {
    var PresentationReposiotry = (function () {
        function PresentationReposiotry() {
        }
        PresentationReposiotry.prototype.Add = function (presentation) {
            localStorage.setItem(presentation.id, JSON.stringify(presentation));
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
    return PresentationReposiotry;
});
//# sourceMappingURL=PresentationRepository.js.map