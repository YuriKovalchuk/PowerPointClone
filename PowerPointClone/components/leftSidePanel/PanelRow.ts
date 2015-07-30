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
        handleSelectSlide(id: string): void;
        clickDeleteUpdatePanel() : void;
        changeStageClickHandler() : void;
        slide: SlideBase;
    }

    export class PanelRow extends React.Component<IPropsPanelRow, any, any>
    {
        repository: RepositoryManager = RepositoryManager.GetInstance();

        handleSelectSlide(id: string): void {
            this.props.handleSelectSlide(id);

        };

        clickDeleteSlide(id: string): void {
            var currentSlide: SlideBase = this.repository.GetSlide(id);
            this.repository.Delete(currentSlide);
            this.props.clickDeleteUpdatePanel();
        };

        render() {
            var style: string;

            if (this.props.slide.selected)
            {
                style = 'panelRow selected';
            }
            else
            {
                style = 'panelRow';
            }

            return React.jsx(`
                <div className={style} >
                    <div className='slideId'> {this.props.slide.index} </div>
                    <div className='delButton' onClick={this.clickDeleteSlide.bind(this, this.props.slide.id) } > 
                        <i className="fa fa-trash-o fa-3"></i>
                    </div>
                    <PanelSlide slide={this.props.slide} handleSelectSlide={this.handleSelectSlide.bind(this)}/>
                </div>
            `);
        }
    }
}

export = PanelRow;