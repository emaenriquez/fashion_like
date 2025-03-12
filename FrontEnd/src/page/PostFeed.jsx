import Menu from '../components/menuComponets/Menu'
import CardFeed from '../components/cardFeed/CardFeed';
const PostFeed = () => {
   
    return (
        <>
            <Menu 
                fotoPerfil={'/foto_perfil.png'} 
                titulo={'postFeed'}
            />
            {/* post */}
            <CardFeed 
                fotoPerfil={'./foto_perfil.png'} 
                fechaPublicacion={'10/02/2025'}
                fotoFeed={'/foto_feed.png'}
                usuario={'@emaenriquez.data'}
                likes={10}
            ></CardFeed>
            <CardFeed 
                fotoPerfil={'./foto_perfil.png'} 
                fechaPublicacion={'10/02/2025'}
                fotoFeed={'/foto_feed.png'}
                usuario={'@emaenriquez.data'}
                likes={10}
            ></CardFeed>
            
        </>

    );
}

export default PostFeed;