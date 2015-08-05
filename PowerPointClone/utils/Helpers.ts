
module Helpers {

    export class Helpers {

        //Generate unique Id for slide
        static GetId(): string {
            return Math.random().toString(36).substring(2, 15) +
                Math.random().toString(36).substring(2, 15);
        }

        public static id: number = 0;

        static GetNumberId(): string {
            Helpers.id++;

            return Helpers.id.toString();
        }
    }
}

export = Helpers;