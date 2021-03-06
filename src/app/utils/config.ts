import * as _ from "lodash";

    export module Config {

    export class URLParam {
        searchString: string;
        apiKey: string;
        movieId: number;
        userId: string;
    }

    
   
    export enum URL {
        //APP_BASE_URL = "http://localhost:8080",
		APP_BASE_URL = "https://movieservice-app.azurewebsites.net",
        //USER_APP_BASE_URL = "http://localhost:8081/user",
		USER_APP_BASE_URL = "https://userservice-app.azurewebsites.net/user",
        API_BASE_URL = "https://api.themoviedb.org/3",
        API_KEY = "8d740543cc5cb4ab374222f45f1fe6c4",
        UPCOMING = "movie/upcoming?api_key=${apiKey}&language=en-US&page=1",
        TRENDING = "movie/popular?api_key=${apiKey}&language=en-US&page=1",
        SEARCH = "search/movie?api_key=${apiKey}&language=en-US&page=1&query=${searchString}",
        RECOMMENDED = "movie/${movieId}/recommendations?api_key=${apiKey}&language=en-US&page=1",
        GET_MOVIE_DETAIL = "movie/${movieId}?api_key=${apiKey}&language=en-US",
        GET_MOVIE_BY_ID = "movie/${movieId}",
        DELETE_MOVIE_BY_ID = "movie/${movieId}",
        GET_ALL_MOVIES = "movie",
        SAVE_OR_UPDATE_MOVIE = "movie",
        LOGIN = "login",
        REGISTER = "register",
        EXISTS = "exists/${userId}"
    };

    const pattern = /\${([\s\S]+?)}/g;

    export class Helper {
        
    public static getAbsoluteURL(url : URL, params : URLParam) : string {
                _.templateSettings.interpolate = pattern ;
                let compiled = _.template(url);
                let finalURL;
                if(params !== null)
                    finalURL = URL.APP_BASE_URL + '/' + compiled(params);
                else
                    finalURL = URL.APP_BASE_URL + '/' + url;
                return finalURL; 
    }

    public static getAbsoluteUserSvcURL(url : URL, params : URLParam) : string {
        _.templateSettings.interpolate = pattern ;
        let compiled = _.template(url);
        let finalURL;
        if(params !== null)
            finalURL = URL.USER_APP_BASE_URL + '/' + compiled(params);
        else
            finalURL = URL.USER_APP_BASE_URL + '/' + url;
        return finalURL; 
}

    public static getAbsoluteAPIURL(url : URL, params : URLParam) : string {
        _.templateSettings.interpolate = pattern ;
        let compiled = _.template(url);
        let finalURL;
        if(params == null)
            params = new URLParam();
        params.apiKey = URL.API_KEY;
        finalURL = URL.API_BASE_URL + '/' + compiled(params);
        return finalURL;

}

}

export enum AlertType { 
    INFO,
    WARN,
    ERROR,
    SUCCESS
};

}

    

    
