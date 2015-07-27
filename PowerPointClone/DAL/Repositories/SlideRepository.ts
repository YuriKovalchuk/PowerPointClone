import IRepository = require('IRepository');
import SlideBase = require('../Model/SlideBase');
import Presentation = require('../Model/Presentation');
import PresentationRepository = require('PresentationRepository');
import SlideType = require('../../Enums/SlideType');

class SlideRepository implements IRepository {
    private pRepository: PresentationRepository = new PresentationRepository();

    Add(silde: SlideBase) {
        var presentation = this.pRepository.Get(silde.presentationId);
        presentation.slides.concat(silde);

        this.pRepository.Update(presentation);
    }

    Get(ids: string[]): SlideBase {
        var presentation = this.pRepository.Get(ids[0]);

        var slide;
        presentation.slides.forEach(
            function (item) {
                if (item.id == ids[1]) {
                    slide = <SlideBase>item;
                }
            });
        return slide;
    }

    Update(slide: SlideBase) {
        var presentation = this.pRepository.Get(slide.presentationId);
        presentation.slides.splice(
            presentation.slides.indexOf(slide),
            1,
            slide);

        this.pRepository.Update(presentation);

    }

    Delete(slide: SlideBase) {
        var presentation = this.pRepository.Get(slide.presentationId);
        presentation.slides.splice(
            presentation.slides.indexOf(slide),
            1);

        this.pRepository.Update(presentation);
    }
}

