///<reference path="../../lib/_references.d.ts"/>

import React = require('react/addons');

//#region NameSpaces
import SlideBaseModule = require('../../DAL/Model/SlideBase');
import SlideWithTitleOnlyModule = require('../../DAL/Model/SlideWithTitleOnly');
import SlideWithTitleAndImageModule = require('../../DAL/Model/SlideTitleWithImage');
import SlideWithTitleAndTextModule = require('../../DAL/Model/SlideTitleWithText');

import EnumsModule = require('../../Enums/SlideType');
//#endregion NameSpaces

//#region Models
import SlideWithTitleOnly = SlideWithTitleOnlyModule.SlideWithTitleOnly;
import SlideWithTitleAndImage = SlideWithTitleAndImageModule.SlideTitleWithImage;
import SlideWithTitleAndText = SlideWithTitleAndTextModule.SlideTitleWithText;
//#endregion Models


module StageSlideTitleOnly {

    export interface StageSlideProps 
    {
        slideModel?: SlideBaseModule.SlideBase,
        modelChangedBubbleUpHandler: (model : SlideBaseModule.SlideBase) => void;
    }

    export interface StageSlideState
    {
        value: string
    }
    
    export class StageSlideTitleOnly extends React.Component<StageSlideProps, StageSlideState, any>
    {   
        handleChange(event) {

            var title: string = event.target.value;

            //create the model and pass it back to the stage with changes
            var model: SlideBaseModule.SlideBase = this.props.slideModel;
            model.title = title;
        
            this.props.modelChangedBubbleUpHandler(model);
            
            //refresh current component
            this.setState({
                value: title
            });            

        }

        render() {
            var value: string;

            if (this.state != null) {
                value = this.state.value;
            }

            return React.jsx(`
                <div className="col-xs-12">
                    <form>
                      <div className="form-group space-top300">
                        <input type="input" 
                               className="form-control title-input" 
                               id="title-content" 
                               placeholder="Click to add Title" 
                               value={value}
                               onChange={this.handleChange.bind(this)} />
                      </div>
                    </form>
                </div>
            `);
        }
    }
}

export = StageSlideTitleOnly;