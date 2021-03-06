export declare class Environment {
    private readonly pName;
    constructor(projectName: string);
    getEnv: (envName: string, defaultValue?: string | undefined) => string;
    getEnvJSON: any;
    getEnvBase64: (envName: string, defaultValue?: string | undefined) => string;
}
