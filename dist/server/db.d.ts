export declare class lavaDB {
    private db;
    constructor(dbpath?: string);
    addGame(name: string, duration: number, ip: string, method: string): Promise<number>;
    getGames(method: string): Promise<{
        name: string;
        duration: number;
    }[]>;
}
export declare function getLavalandDatabase(): lavaDB;
