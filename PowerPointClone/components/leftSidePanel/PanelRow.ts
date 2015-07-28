///<reference path="../../lib/_references.d.ts"/>

import React = require('react/addons');
import PanelSlide = require('../leftSidePanel/PanelSlide');


module PanelRow {
    interface IPropsPanelRow {
        changeStageClickHandler: (id: string) => void;
        slide: { id: string; title: string };
        key: string;
    }

    export class PanelRow extends React.Component<IPropsPanelRow, any, any>
    {
        

        handleSlideClick(id: string): void {
            console.log('test in Panel Row');
            this.props.changeStageClickHandler(id);
        };

        render() {

            var id = this.props.slide.id;
            
            return React.jsx(`
            <div className='panelRow' onClick={this.handleSlideClick.bind(this, id)}>
                <span className='slideId'> {this.props.slide.id} </span>
                <PanelSlide.PanelSlide title={this.props.slide.title}/>
            </div>
        `);
        }
    }
}

export = PanelRow;