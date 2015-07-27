class Helpers {

    //Generate uique Id for slide
    static GetId(): string {
        return Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15);
    }
}

export = Helpers;