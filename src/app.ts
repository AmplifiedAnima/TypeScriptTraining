
// building block for training regimen

class TrainingUnitMainExer {
    mainExercise: string;
    reps: number;
    sets: number;
    intensity: number;

    constructor(mainExercise: string, reps: number, sets: number, intensity: number) {
        this.mainExercise = mainExercise;
        this.reps = reps;
        this.sets = sets;
        this.intensity = intensity;
    }   
}
class trainingUnitAccesory { 
    accesory:  string;
    accesorySets: number;
    accesoryReps: number;
    constructor(accesory: string, accesorySets: number, accesoryReps: number) {
        this.accesory = accesory
        this.accesorySets = accesorySets
        this.accesoryReps = accesoryReps
    }
} 



const loadTheLoad = (repetitions:number,intensity:number)=> {
    const repMax:number = repetitions * intensity * 0.033 + intensity;
    return repMax;

};
let a = new trainingUnitAccesory('chad', 4 ,20)
console.log(a);

 
class weeklySchedule {
}

const progress4Volume = (mainExercise: string, repMax: number) => {
    mainExercise = mainExercise;
    repMax = repMax;
};

let loadCount: number = 0;
let trainingUnitsCount: number = 0;
// int stands for intensity ( weight of kg u can bear )
const progress4Strength = (mainExercise: string, repMax: number , int88plus: boolean , int92plus: boolean , int95plus: boolean) => {
    
    let intensity;
    if (int88plus == true && int92plus == false && int95plus == false) {
    let sets = 5;
    let reps = 5;
    intensity = repMax * 0.88;
    let a =  new TrainingUnitMainExer(mainExercise, reps, sets, intensity)
    return a;
    }   
    if (int88plus == true && int92plus == true && int95plus == false) {
        let sets = 7;
        let reps = 3;
        intensity = repMax * 0.92;
        let a = new TrainingUnitMainExer(mainExercise, reps, sets ,intensity)
        return a;
    } 
    if (int88plus == false && int92plus == false && int95plus == true) {
            let sets = 8;
            let reps = 2;
            intensity = repMax * 0.95;
            let a =  new TrainingUnitMainExer(mainExercise, reps, sets, intensity);
            return a;
            
    }   trainingUnitsCount ++;
    return a;
}

const w = progress4Strength('squat',170,false,false,true)
const acc = [new trainingUnitAccesory('bułgary',4,4), new trainingUnitAccesory('pompki',5,20)]

const trainingUnit = (mainExercise:{} ,accesory: {}|[{}]) => {
    const c =  [mainExercise , accesory]
    return c;
}

console.log(trainingUnit(w,acc))

const volumeTracker = () => {

}
 



