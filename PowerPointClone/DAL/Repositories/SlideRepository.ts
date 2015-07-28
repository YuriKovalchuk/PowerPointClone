import Repository = require('IRepository');
import Slide = require('../Model/SlideBase');
import Model = require('../Model/Presentation');
import PresentationDb = require('../Repositories/PresentationRepository');
import SlideType = require('../../Enums/SlideType');
import RepositoryManger = require('../RepositoryManager');
import Mode = require('../../DAL/Model/Presentation');

import PresentationRepository = PresentationDb.PresentationReposiotry;

module SlideDb {
    export class SlideRepository {
        private _presentationRepository: PresentationDb.PresentationReposiotry = new PresentationDb.PresentationReposiotry();
        private _presentation: Model.Presentation;
        
        constructor(
            presentation: Model.Presentation) {
            this._presentation = presentation;
        }

        Add(silde: Slide.SlideBase) {
            this._presentation.slides.push(silde);

            this._presentationRepository.Update(this._presentation);
        }

        GetAll(): Slide.SlideBase[] {
            return this._presentation.slides;
        }

        Get(id: string): Slide.SlideBase {

            var slide: Slide.SlideBase;
            for (var i = 0; i < this._presentation.slides.length; i++) {
                if (this._presentation.slides[i].id == id) {
                    return this._presentation.slides[i];
                }
            }

            return slide;
        }

        Update(slide: Slide.SlideBase) {
            this._presentation.slides.splice(
                this._presentation.slides.indexOf(slide),
                1,
                slide);

            this._presentationRepository.Update(this._presentation);
        }

        Delete(slide: Slide.SlideBase) {
            this._presentation.slides.splice(
                this._presentation.slides.indexOf(slide),
                1);

            this._presentationRepository.Update(this._presentation);
        }
    }
}

export = SlideDb;