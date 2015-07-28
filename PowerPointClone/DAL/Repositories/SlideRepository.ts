import Repository = require('IRepository');
import ISlideBase = require('../Model/ISlideBase');
import Presentation = require('../Model/Presentation');
import PresentationDb = require('PresentationRepository');
import SlideType = require('../../Enums/SlideType');

import PresentationRepository = PresentationDb.PresentationReposiotry;

module SlideDb {
    export class SlideRepository implements Repository.IRepository {
        private pRepository: PresentationRepository = new PresentationRepository();

        Add(silde: ISlideBase) {
            var presentation = this.pRepository.Get(silde.presentationId);
            presentation.slides.concat(silde);

            this.pRepository.Update(presentation);
        }

        GetAll(PresentationId: string): ISlideBase[] {
            var presentation = this.pRepository.Get(PresentationId);
            return presentation.slides;
        }

        Get(ids: string[]): ISlideBase {
            var presentation = this.pRepository.Get(ids[0]);

            var slide;
            presentation.slides.forEach(
                function (item) {
                    if (item.id == ids[1]) {
                        slide = <ISlideBase>item;
                    }
                });
            return slide;
        }

        Update(slide: ISlideBase) {
            var presentation = this.pRepository.Get(slide.presentationId);
            presentation.slides.splice(
                presentation.slides.indexOf(slide),
                1,
                slide);

            this.pRepository.Update(presentation);

        }

        Delete(slide: ISlideBase) {
            var presentation = this.pRepository.Get(slide.presentationId);
            presentation.slides.splice(
                presentation.slides.indexOf(slide),
                1);

            this.pRepository.Update(presentation);
        }
    }

}

export = SlideDb;