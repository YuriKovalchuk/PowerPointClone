///<reference path="../../lib/_references.d.ts"/>

import React = require('react/addons');
import PanelRowModule = require('../leftSidePanel/PanelRow');
import SlideTitleWithImageModule = require('../../DAL/Model/SlideTitleWithImage');
import SlideTitleWithTextModule = require('../../DAL/Model/SlideTitleWithText');
import SlideWithTitleOnlyModule = require('../../DAL/Model/SlideWithTitleOnly');
import SingletonModule = require('../../DAL/RepositoryManager');

import PanelRow = PanelRowModule.PanelRow;
import SlideTitleWithImage = SlideTitleWithImageModule.SlideTitleWithImage;
import SlideTitleWithText = SlideTitleWithTextModule.SlideTitleWithText;
import SlideWithTitleOnly = SlideWithTitleOnlyModule.SlideWithTitleOnly;
import RepositoryManager = SingletonModule.RepositoryManager;


module LeftPanel {

    interface IPropLeftPanel {
        changeStageClickHandler(id: string): void;
    }

    export class LeftPanel extends React.Component<IPropLeftPanel, any, any>
    {
        repository: RepositoryManager = RepositoryManager.GetInstance();

        model: any = [];

        changeStageClickHandler(id: string): void {
            this.props.changeStageClickHandler(id);
        };

        componentWillMount(): void {
            this.model = this.repository.GetAllSlides();
        };

        clickAddSlide(): void {
            var newSlide = new SlideWithTitleOnly('');
            this.repository.AddSlide(newSlide);
            this.model = this.repository.GetAllSlides();
            this.forceUpdate();
        };

        clickDeleteSlide(): void {
            this.forceUpdate();
        }

        render() {

            var data = [];

            var f = this.changeStageClickHandler.bind(this);
            var g = this.clickDeleteSlide.bind(this);

            this.model.forEach(function (s) {
                data.push(React.jsx(`
                    <PanelRow slide={s} changeStageClickHandler={f} clickDeleteUpdatePanel={g} />
                `));
            });

            return React.jsx(`
                <div>
                    <div className='header' >
                        <div className='header left'> Slides </div>
                        <div className='header right' onClick={this.clickAddSlide.bind(this)}>
                            <i className="fa fa-plus-square fa-lg"></i>&nbsp;Add slide
                        </div>
                    </div>
                    <div className='leftSidePanel'>
                        {data}
                    </div>            
                </div>
            `);
        }
    }
}

export = LeftPanel;