import Backbone = require('backbone');
import EnumsModel = require('../../../Enums/SlideType');
import RM = require('../../RepositoryManager');
import Slide = require('../SlideBase');
import Utils = require('../../../utils/Helpers');

module BackboneModels {
    export class SlideCollection extends Backbone.Model {
        private _list: Slide.SlideBase[];
        private _repository: RM.RepositoryManager = RM.RepositoryManager.GetInstance();

        sync(...arg: any[]): any {
            super.set('list', this._repository.GetAllSlides());
        }

        get list(): Slide.SlideBase[]{
            return super.get('list');
        }

        set list(value: Slide.SlideBase[]) {
            super.set('list', value);
        }

        //public get(attributeName: string): Slide.SlideBase[] {
        //    this.list = this._repository.GetAllSlides();
        //    return this.list;
        //}

        //public set(attributeName: string, value: Slide.SlideBase[], options?: Backbone.ModelSetOptions) :any{

        //}
    }
}

export = BackboneModels;