export declare function initOrReadFile<T>(filePath: string, v?: T): Promise<T>;
export declare class FoolsWatcherSubscription<T> {
    set: (data: T) => Promise<void>;
    unsubscribe: () => Promise<void>;
    constructor(set: (data: T) => Promise<void>, unsubscribe: () => Promise<void>);
}
export declare class lavaDB {
    private dbpath;
    private subscription;
    private dbContent;
    constructor(dbpath?: string);
    addGame(name: string, duration: number, ip: string, method: string, gameId: string): Promise<void>;
    getGames(method: string): {
        name: string;
        duration: number;
    }[];
}
export declare function getLavalandDatabase(): lavaDB;
