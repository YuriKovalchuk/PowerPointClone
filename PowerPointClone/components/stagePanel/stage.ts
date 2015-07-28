﻿///<reference path="../../lib/_references.d.ts"/>

import React = require('react/addons');
import StageSlideTitleWithTextModule = require('../stagePanel/stageSlideTitleWithText');
import StageSlideTitleOnlyModule = require('../stagePanel/stageSlideTitleOnly');
import StageSlideTitleWithImageModule = require('../stagePanel/stageSlideTitleWithImage');

import StageSlideTitleWithText = StageSlideTitleWithTextModule.stageSlideTitleWithText;
import StageSlideTitleOnly = StageSlideTitleOnlyModule.StageSlideTitleOnly;
import StageSlideTitleWithImage = StageSlideTitleWithImageModule.StageSlideTitleWithImage;

module Stage {

    export class Stage extends React.Component<any, any, any>
    {
        render() {

            var stageSlideValue;
            var slideType = this.props.changedSlideType;

            switch (slideType) {
                case 'TitleOnly':
                    stageSlideValue = React.jsx(`<StageSlideTitleOnly />`);
                    break;
                case 'TitleWithImage':
                    stageSlideValue = React.jsx(`<StageSlideTitleWithImage />`);
                    break;
                case 'TitleWithText':
                    stageSlideValue = React.jsx(`<StageSlideTitleWithText />`);
                    break;
                default:
                    stageSlideValue = React.jsx(`<StageSlideTitleOnly />`);
                    //throw new Error("Invalid slide type!");
                    break;
            }

            return React.jsx(`
                <div className="row panel">
                    <div className="stage">
                        {stageSlideValue}
                    </div>
                </div>
            `);
        }
    }
}

export = Stage;