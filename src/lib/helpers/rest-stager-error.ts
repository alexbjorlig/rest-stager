

export class RestStagerError extends Error {
    code: 'parse' | 'execution' | 'unkown';

    constructor(code: 'parse' | 'execution' | 'unkown', message?: string) {
        super(message);
        this.code = code;
    }

}
