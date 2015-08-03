///<reference path="../../lib/_references.d.ts"/>

import React = require('react/addons');
import PanelRowModule = require('../leftSidePanel/PanelRow');
import SlideBaseModule = require('../../DAL/Model/SlideBase');
import SlideTitleWithImageModule = require('../../DAL/Model/SlideTitleWithImage');
import SlideTitleWithTextModule = require('../../DAL/Model/SlideTitleWithText');
import SlideWithTitleOnlyModule = require('../../DAL/Model/SlideWithTitleOnly');
import SingletonModule = require('../../DAL/RepositoryManager');

import PanelRow = PanelRowModule.PanelRow;
import SlideBase = SlideBaseModule.SlideBase;
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

        model: SlideBase[] = [];

        clicked: boolean = false;

        selectedSlide: SlideBase;

        changeStageClickHandler(id: string): void {
            this.props.changeStageClickHandler(id);
        };

        componentWillMount(): void {
            //this.model = this.repository.GetAllSlides();
            //this.model[0].selected = true;
            //this.selectedSlide = this.model[0];
        };

        componentDidUpdate() {
            if (this.clicked) {
                this.scrollDown();
            }

            this.clicked = false;
        };


        scrollDown(): void {
            var panel = document.getElementById('leftSidePanel');
            panel.scrollTop = panel.scrollHeight;
        }

        clickAddSlide(): void {
            var newSlide = new SlideWithTitleOnly('');
            newSlide.selected = true;
            this.repository.AddSlide(newSlide);
            this.selectedSlide = newSlide;
            this.model = this.repository.GetAllSlides();
            this.forceUpdate();
            this.scrollDown();
            this.clicked = true;
        };

        clickDeleteSlide(): void {
            this.forceUpdate();
        }

        handleSelectSlide(id: string): void {
            this.selectedSlide = this.repository.GetSlide(id);
            this.selectedSlide.selected = true;
            this.repository.UpdateSlide(this.selectedSlide);
            this.forceUpdate();
        }

        render() {

            var data = [];
            var index: number = 0;

            var f = this.changeStageClickHandler.bind(this);
            var g = this.clickDeleteSlide.bind(this);
            var h = this.handleSelectSlide.bind(this);
            var selectedSlide = this.selectedSlide;
            var repository = this.repository;

            this.model.forEach(function (s) {

                if (s != selectedSlide) {
                    s.selected = false;
                    repository.UpdateSlide(s);
                }

                index++;
                s.index = index;

                data.push(React.jsx(`
                    <PanelRow slide={s} changeStageClickHandler={f} clickDeleteUpdatePanel={g} handleSelectSlide={h} />
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
                    <div id='leftSidePanel' className='leftSidePanel'>
                        {data}
                    </div>            
                </div>
            `);
        }
    }
}

export = LeftPanel;