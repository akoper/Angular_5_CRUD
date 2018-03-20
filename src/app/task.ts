export class Task {

    constructor(
        public id: number,
        public user_id: number,
        public name: string,
        public description: string,
        public start_date: string,
        public end_date: string

    ) {}

}
