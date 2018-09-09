/**
 *
 *
 * @export
 * @class Webserver
 */
export declare class Webserver {
    readonly port: number;
    readonly servepath: string;
    private app;
    /**
     *Creates an instance of Webserver.
     * @param {number} port
     * @param {string} servepath
     * @memberof Webserver
     */
    constructor(port: number, servepath: string);
    /**
     *
     *
     * @private
     * @memberof Webserver
     */
    private setup;
}
