import IRepository = require('IRepository');
import ISlideBase = require('../Model/SlideBase');
import Presentation = require('../Model/Presentation');
import PresentationRepository = require('PresentationRepository');

import SlideBase = ISlideBase.SlideBase;

class SlideRepository implements IRepository {
    private pRepository: PresentationRepository = new PresentationRepository();

    Add(silde: SlideBase.ISlideBase) {
        var presentation = this.pRepository.Get(silde.presentationId);
        presentation.slides.concat(silde);

        this.pRepository.Update(presentation);
    }

    Get(ids: string[]): SlideBase.ISlideBase {
        var presentation = this.pRepository.Get(ids[0]);

        var slide;
        presentation.slides.forEach(
            function (item) {
                if (item.id == ids[1]) {
                    slide = <SlideBase.ISlideBase>item;
                }
            });
        return slide;
    }

    Update(slide: SlideBase.ISlideBase) {
        var presentation = this.pRepository.Get(slide.presentationId);
        presentation.slides.splice(
            presentation.slides.indexOf(slide),
            1,
            slide);

        this.pRepository.Update(presentation);

    }

    Delete(slide: SlideBase.ISlideBase) {
        var presentation = this.pRepository.Get(slide.presentationId);
        presentation.slides.splice(
            presentation.slides.indexOf(slide),
            1);

        this.pRepository.Update(presentation);
    }
}

