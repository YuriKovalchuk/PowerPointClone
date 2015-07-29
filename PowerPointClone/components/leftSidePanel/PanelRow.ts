///<reference path="../../lib/_references.d.ts"/>

import React = require('react/addons');
import PanelSlideModule = require('../leftSidePanel/PanelSlide');
import SingletonModule = require('../../DAL/RepositoryManager');
import SlideBaseModule = require('../../DAL/Model/SlideBase');

import PanelSlide = PanelSlideModule.PanelSlide;
import RepositoryManager = SingletonModule.RepositoryManager;
import SlideBase = SlideBaseModule.SlideBase;


module PanelRow {
    interface IPropsPanelRow {
        clickDeleteUpdatePanel: () => void;
        changeStageClickHandler: () => void;
        slide: SlideBase;
    }

    export class PanelRow extends React.Component<IPropsPanelRow, any, any>
    {
        repository: RepositoryManager = RepositoryManager.GetInstance();

        handleSlideClick(): void {
            console.log('test in Panel Row');
            this.props.changeStageClickHandler();
        };

        clickDeleteSlide(id: string): void {
            var currentSlide: SlideBase = this.repository.GetSlide(id);
            this.repository.Delete(currentSlide);
            this.props.clickDeleteUpdatePanel();
        };

        render() {
            
            return React.jsx(`
                <div className='panelRow' clickOnSlide={this.handleSlideClick.bind(this)}>
                    <div className='slideId'> 0 </div>
                    <div className='delButton' onClick={this.clickDeleteSlide.bind(this, this.props.slide.id) } > 
                        <i className="fa fa-trash-o fa-3"></i>
                    </div>
                    <PanelSlide title={this.props.slide.title}/>
                </div>
            `);
        }
    }
}

export = PanelRow;