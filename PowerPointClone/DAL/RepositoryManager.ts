import PresentationModel = require('../DAL/Model/Presentation');
import PresentationRepository = require('../DAL/Repositories/PresentationRepository')
import SlideRepository = require('../DAL/Repositories/SlideRepository')
import Slide = require('../DAL/Model/SlideBase');

import Presentation = PresentationModel.Presentation;

module Singleton {
    export class RepositoryManager {
        private static _instance: RepositoryManager = new RepositoryManager();
        private _pRepository = new PresentationRepository.PresentationReposiotry();
        private _presentation: Presentation = this.CheckPresentationForRepository();
        private _sRepository = new SlideRepository.SlideRepository(this._presentation);

        constructor() {
            if (RepositoryManager._instance) {
                throw new Error("Error: Instantiation failed: Use RepositoryManager.GetInstance() instead of new");
            }

            RepositoryManager._instance = this;
        }

        public static GetInstance(): RepositoryManager {
            return RepositoryManager._instance;
        }

        //#region Presentation
        public GetPresentation(): Presentation {
            return this._presentation;
        }

        public SavePresentation(): void {
            this._pRepository.Update(this._presentation);
        }

        public DeletePresentation(): void {
            this._pRepository.Delete(this._presentation);
            this._presentation = this.CheckPresentationForRepository();
        }
        //#endregion Presentation

        //#region Slide

        public AddSlide(slide: Slide.SlideBase): void {
            this._sRepository.Add(slide);
            this.SavePresentation();
        }

        public GetSlide(id: string): Slide.SlideBase {
            return this._sRepository.Get(id);
        }

        public GetAllSlides(): Slide.SlideBase[] {
            return this._sRepository.GetAll();
        }

        public UpdateSlide(slide: Slide.SlideBase) {
            this._sRepository.Update(slide);
            this.SavePresentation();
        }

        public Delete(slide: Slide.SlideBase) {
            this._sRepository.Delete(slide);
            this.SavePresentation();
        }

        public DeleteAllSlides(): void {
            this._sRepository.DeleteAll();
            this.SavePresentation();
        }

        //#endregion Slide

        //#region Utils
        private CheckPresentationForRepository(): Presentation {
            var presentation = this._pRepository.GetCurrentPresentation();
            this._pRepository.Update(presentation);
            return presentation;
        }
        //#endregion
    }
}

export = Singleton;