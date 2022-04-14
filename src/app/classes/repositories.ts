export class Repositories {
  constructor(
        public name:string,
        public description:string,
        public watchers:number,
        public forks:number,
        public language:string,
        public svn_url:string,
        public created_at: Date,
    ){}
}
