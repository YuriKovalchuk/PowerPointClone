define(["require", "exports", '../Repositories/PresentationRepository'], function (require, exports, PresentationDb) {
    var SlideDb;
    (function (SlideDb) {
        var SlideRepository = (function () {
            function SlideRepository(presentation) {
                this._presentationRepository = new PresentationDb.PresentationReposiotry();
                this._presentation = presentation;
            }
            SlideRepository.prototype.Add = function (silde) {
                this._presentation.slides.push(silde);
                this._presentationRepository.Update(this._presentation);
            };
            SlideRepository.prototype.GetAll = function () {
                return this._presentation.slides;
            };
            SlideRepository.prototype.Get = function (id) {
                var slide;
                for (var i = 0; i < this._presentation.slides.length; i++) {
                    if (this._presentation.slides[i].id == id) {
                        return this._presentation.slides[i];
                    }
                }
                return slide;
            };
            SlideRepository.prototype.Update = function (slide) {
                this._presentation.slides.splice(this._presentation.slides.indexOf(slide), 1, slide);
                this._presentationRepository.Update(this._presentation);
            };
            SlideRepository.prototype.Delete = function (slide) {
                this._presentation.slides.splice(this._presentation.slides.indexOf(slide), 1);
                this._presentationRepository.Update(this._presentation);
            };
            SlideRepository.prototype.DeleteAll = function () {
                this._presentation.slides.splice(0);
                this._presentationRepository.Update(this._presentation);
            };
            return SlideRepository;
        })();
        SlideDb.SlideRepository = SlideRepository;
    })(SlideDb || (SlideDb = {}));
    return SlideDb;
});
//# sourceMappingURL=SlideRepository.js.map