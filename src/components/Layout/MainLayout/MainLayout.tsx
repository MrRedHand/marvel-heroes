import React, {FC, ReactNode} from "react";
import  "./MainLayout.scss"

interface IMainLayout {
    children : ReactNode
}

export const MainLayout : FC<IMainLayout> = ({children}) => {
    return (
        <div className='main-layout'>
            {children}
        </div>
    )
}