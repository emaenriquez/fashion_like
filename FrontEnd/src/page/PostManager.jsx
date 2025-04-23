

import Menu from '../components/menuComponents/Menu'
import CardFeed from '../components/feedComponents/feedComponents';

const PostManager = () => {
    return (
        <>
            <Menu fotoPerfil={'/foto_perfil.png'} titulo={'Manager'}></Menu>
            <CardFeed 
                fotoPerfil={'./foto_perfil.png'} 
                fechaPublicacion={'10/02/2025'}
                fotoFeed={'/foto_feed.png'}
                usuario={'@emaenriquez.data'}
                likes={10}
                rol={'admin'}
            ></CardFeed>
        </>
    );
};

export default PostManager;