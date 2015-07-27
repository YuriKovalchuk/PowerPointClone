export module SlideBase {
    export enum SlideType { TitleOnly, TitleWithImage, TitleWithText }

    export class ISlideBase {
        slideType: SlideType;
        id: string;
        title: string;

        presentationId: string;
    }
}
