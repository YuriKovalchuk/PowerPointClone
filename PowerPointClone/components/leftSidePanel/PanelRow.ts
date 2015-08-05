///<reference path="../../lib/_references.d.ts"/>

import React = require('react/addons');
import PanelSlideModule = require('../leftSidePanel/PanelSlide');
import SlideModule = require('../../DAL/Model/Backbone.Models/Slide');

import PanelSlide = PanelSlideModule.PanelSlide;
import Slide = SlideModule.Slide;


module PanelRow {
    interface IProps {
        handleSelectSlide(id: string): void;
        clickDeleteUpdatePanel(id: string): void;
        slide: Slide;
        index: number;
        deleted: boolean;
    }

    interface IState {
        deleted?: boolean,
        hasData?: boolean
    }

    export class PanelRow extends React.Component<IProps, IState, any>
    {

        state = {
            deleted: false,
            hasData : false
        }

        public model: Slide = new Slide();

        handleSelectSlide(id: string): void {
            console.log('Handling selected slide in Panel Row');
            this.props.handleSelectSlide(id);
        }

        clickDeleteSlide(id: string): void {
            console.log('Delete button clicked ( panel row )');

            this.props.clickDeleteUpdatePanel(id);
            this.setState({
                deleted: true
            })
        }

        componentWillMount(): void {
            //this.model.fetch({
            //    url: "http://localhost:53840/api/slides/" + this.props.slideId
            //});

            //this.setState({
            //    deleted: this.props.deleted
            //})
        }

        componentDidMount(): void {
            //this.model.on("sync", function () {
            //    this.setState({
            //        hasData: true
            //    });
            //}, this)
        }

        render() {
            console.log('Rendering panel row...');

            var style: string;

            if (this.props.slide.get('Selected')) {
                style = 'panelRow selected';
            }
            else {
                style = 'panelRow';
            }

            var id = this.props.slide.get('Id');

            //if (!this.state.deleted) {
                return React.jsx(`
                    <div className={style} >
                        <div className='slideId'> {this.props.index} </div>
                        <div className='delButton' onClick={this.clickDeleteSlide.bind(this, id) } >
                            <i className="fa fa-trash-o fa-3"></i>
                        </div>
                        <PanelSlide slide={this.props.slide} handleSelectSlide={this.handleSelectSlide.bind(this)}/>
                    </div>
                `);
            //}
            //else {
            //    return React.jsx(`
            //        <div className={style} >
            //            <div className='slideId'> {this.props.index} </div>
            //            <div className='delButton' >
            //                <i className="fa fa-trash-o fa-3"></i>
            //            </div>
            //            <div> Deleting slide ... </div>
            //        </div>
            //    `);
            //}
        }
    }
}

export = PanelRow;