import IRepository = require('IRepository');
import Presentation = require('../Model/Presentation');

class PresentationReposiotry implements IRepository{
    Add(presentation: Presentation) {
        localStorage.setItem(presentation.id, JSON.stringify(presentation));
    }

    Get(id: string): Presentation{
        var presentationRaw = localStorage.getItem(id);
        var presentation = <Presentation>JSON.parse(presentationRaw);
        return presentation;
    }
    Update(presentation: Presentation) {
        this.Delete(presentation);
        localStorage.setItem(presentation.id, JSON.stringify(presentation));
    }
    Delete(presentation: Presentation) {
        localStorage.removeItem(presentation.id);
    }
}

export = PresentationReposiotry;