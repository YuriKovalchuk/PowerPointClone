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



module StageSlideTitleWithText {

    export interface StageSlideProps
    {
        slideModel: SlideBaseModule.SlideBase
    }

    export interface StageSlideState
    {
        value: string
    }


    export class StageSlideTitleWithText extends React.Component<any, any, any>
    {
        render() {

            var castedSlide: SlideWithTitleAndText = <SlideWithTitleAndText>this.props.slideModel;

            return React.jsx(`
                <div className="col-xs-12">
                    <form>
                      <div className="form-group space-top55">
                        <input type="email" className="form-control title-input" id="title-content" placeholder="Click to add Title" value={castedSlide.title} />
                      </div>
                      <div className="form-group space-top55">
                        <textarea className="form-control body-input" id="body-content" placeholder="Click to Content" value={castedSlide.content}></textarea>
                      </div>
                    </form>
                </div>
             `);
        }
    }
}

export = StageSlideTitleWithText;