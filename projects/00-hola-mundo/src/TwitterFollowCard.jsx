import { useState } from "react"
export function TwitterFolowCard({children,userName, initialIsFollowing }){    

    const [isFollowing,setIsFollowing] = useState(initialIsFollowing)

    const handleClick = () =>{
       setIsFollowing(!isFollowing)
    }
    

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-follow-card-button is-following' : 'tw-follow-card-button'

    return(
        <article className='tw-follow-card'>
            <header className='tw-follow-card-header'>
                <img
                    className='tw-follow-card-avatar' 
                    alt="El Avatar de Ejemplo" 
                    src={`https://unavatar.io/${userName}`}/>
                <div className='tw-follow-card-info'>
                    <strong>{children}</strong>
                    <span className='tw-follow-card-infoUserName'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button onClick={handleClick} className={buttonClassName}>
                    <span className="tw-follow-card-text">{text}</span>
                    <span className="tw-follow-card-stopFollow" >Dejear de seguir</span>
                </button>
            </aside>
        </article> 
    )
}
