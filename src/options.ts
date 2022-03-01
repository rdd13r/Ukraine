export interface IUkraineOptions {
    /**
     * In which element should the flag + text + blood be inserted.
     * Note: If not specified, a new element will be created and appended to the body.
     */
    element: HTMLElement;

    /**
     * List of banned countries by ISO 3166
     */
    countries: string[];

    /**
     * What text to show
     * Note: It is possible to use HTML tags - do not pass here user input
     */
    text: string;

    /**
     * Link to more information about this war
     * TODO: Implement
     * TODO: To samples + README
     */
    moreInfoUrl: string | URL;

    /**
     * If true, information will be shown also in dev console
     */
    isInConsole: boolean;

    /**
     * If true, image of the blood will be shown.
     */
    isBloodIncluded: boolean;

    /**
     * If true, images from war will be shown.
     * TODO: Implement
     * TODO: To samples + README
     */
    isGraphicIncluded: boolean;

    /**
     * If true, there will be option to proceed to website
     * This will change HARD ban to SOFT ban
     * TODO: Implement
     * TODO: To samples + README
     */
    isCancelable: boolean;
}
