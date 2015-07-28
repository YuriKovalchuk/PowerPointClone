import Repository = require('IRepository');
import Presentation = require('../Model/Presentation');

module PresentationDb {
    export class PresentationReposiotry implements Repository.IRepository {
        Add(presentation: Presentation) {
            localStorage.setItem(presentation.id, JSON.stringify(presentation));
        }

        GetAll(): Presentation[] {
            var presentationList: Presentation[];
            for (var i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i).indexOf("presentation-") > -1) {
                    presentationList.concat(this.Get(localStorage.key(i)));
                }
            }

            return presentationList;
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