enum Editor {
    MARVEL,
    DC
}


interface CanFly {
    fly(mesage: string): void
}


interface Hero {
    name: string;
    creationYear: number;
}

const batman: Hero = {
    name: 'Batman',
    creationYear: 1939
};

abstract class Superhero implements Hero {
    private static readonly LABEL = 'Hero:';
    constructor(
        readonly name: string,
        public _editor: Editor,
        public creationYear: number
    ) { }

    get editor(): string {
        return Editor[this._editor]
    }
    set editor(editorName: string) {
        this._editor = (<any>Editor)[editorName]
    }

    abstract get message(): string

    static createMessage(hero: Superhero): string {
        return `
        ${Superhero.LABEL}
        name: ${hero.name}
        editor: ${Editor[hero._editor]}
        creation year: ${hero.creationYear}
        `
    }
}



class FlyingHero extends Superhero implements CanFly {

    fly(message: string) {
        console.log(message, this.creationYear);
    }


    get message() {
        return `
        Flying hero:
            name: ${this.name}
            editor: ${this.editor}
            creation year: ${this.creationYear}`
    }

}

const greenLantern = new FlyingHero('Solver Age Green Lantern', Editor.DC, 1959)
const supermies = new FlyingHero('Supermies!', Editor.DC, 1938);
console.log(supermies)
supermies.editor = 'DC';
console.log(supermies.message)

greenLantern.fly('Flying!')
console.log(Superhero.createMessage(supermies))