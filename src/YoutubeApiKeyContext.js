import { createContext } from "react";

export const YoutubeApiKeyContext=createContext();

const YoutubeApiKeyContextProvider=(props)=>{
    let API_KEY="AIzaSyB4xubm1ahtngDTZnhF_YNtMh6ESdtXrc0";
      return(
    <YoutubeApiKeyContext.Provider value={{API_KEY}}>
            {props.children}
        </YoutubeApiKeyContext.Provider>
      )
}
export default YoutubeApiKeyContextProvider;