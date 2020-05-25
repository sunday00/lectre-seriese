export interface Example {
    alpha: string;
}

export class Sample implements Example {
    public alpha: string;
    constructor(some: string){
        this.alpha = some;
    }

    setAlpha(some: string): void {
        this.alpha = some;
    }

    getAlpha(): string {
        return this.alpha;
    }
}