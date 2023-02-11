import { createContext, useContext, useState } from "react";

export const appContext = createContext();


export const AppContextProvider = ({ children }) => {
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState("");
    const [user, setUser] = useState();

    const handleOnSelect = (user) => {
        console.log(user);
        setSelectedUser(user);
        setIsModalOpen(true);
    }

    const val = { isModalOpen, setIsModalOpen ,selectedUser, setSelectedUser,handleOnSelect,user, setUser};
    
    return (
        <appContext.Provider value={val}>
           {children}
        </appContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(appContext);
}

