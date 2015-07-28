import Repository = require('IRepository');
import Model = require('../Model/Presentation');

import Presentation = Model.Presentation;


module PresentationDb {
    export class PresentationReposiotry implements Repository.IRepository {
        Add(presentation: Presentation) {
            localStorage.setItem(presentation.id, JSON.stringify(presentation));
        }

        GetCurrentPresentation(): Presentation {
            for (var i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i).indexOf("presentation-") == 0) {
                    return this.Get(localStorage.key(i));
                }
            }

            return new Presentation();
        }

        Get(id: string): Presentation {
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
}

export = PresentationDb;