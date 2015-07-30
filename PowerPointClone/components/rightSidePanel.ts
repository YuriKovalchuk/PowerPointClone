///<reference path="../lib/_references.d.ts"/>

import React = require('react/addons');

module RightSidePanel {

    export class RightSidePanel extends React.Component<any, any, any>
    {
        changeLayoutClickHandler(slideType): void {
            this.props.changeLayoutClick(slideType);
        }

        render() {

            return React.jsx(`
                <div className="panel height700">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="header">
                                Layouts
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="slide-base center-block space-top100 space-bottom20" onClick={this.changeLayoutClickHandler.bind(this,0)}>
                                <div className="title-placeholder center-block space-top55"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="slide-base center-block space-bottom20" onClick={this.changeLayoutClickHandler.bind(this,2)}>
                                <div className="title-placeholder center-block space-top10"></div>
                                <div className="text-body-placeholder center-block space-top10"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="slide-base center-block space-bottom20" onClick={this.changeLayoutClickHandler.bind(this,1)}>
                                <div className="title-placeholder center-block space-top10"></div>
                                <div className="text-body-placeholder center-block space-top10">
                                    <img src="http://placekitten.com/g/150/80" title="Image" className="right-side-image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `);
        }
    }
}


export = RightSidePanel;