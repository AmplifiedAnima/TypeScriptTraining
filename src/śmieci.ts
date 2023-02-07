// Code goes here!


class UserBoy {
    public name: string;
    public weight: number;
    public repMax: [{}] | {}= {};

    constructor(n:string, weight:number, repMax: [{}]){
        this.name = n;
        this.weight = weight;
        this.repMax = repMax;
        };

    
}

const babalu = new UserBoy('babalu',80,[{'Squat':100}]);
 
console.log(babalu)
