import './singlepost.css'

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img
                    src="https://images.pexels.com/photos/597200/pexels-photo-597200.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                    alt=""
                    className="singlePostImg"
                />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-solid fa-trash-can"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Bao</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDes">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi hic dolor aspernatur error voluptas aut magnam ratione modi molestias maxime. Consectetur dicta non ducimus. Iure dolorum facere delectus magnam cupiditate.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quidem exercitationem. Aliquid dignissimos provident quos reprehenderit labore ab non iste illo ea incidunt necessitatibus autem, optio inventore vero reiciendis eos.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quidem exercitationem. Aliquid dignissimos provident quos reprehenderit labore ab non iste illo ea incidunt necessitatibus autem, optio inventore vero reiciendis eos.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quidem exercitationem. Aliquid dignissimos provident quos reprehenderit labore ab non iste illo ea incidunt necessitatibus autem, optio inventore vero reiciendis eos.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi asperiores dolores, ad modi hic id delectus iure dolor adipisci magnam magni vero fugiat cum aut necessitatibus. Consequatur, neque? Dolorem, quaerat?
                </p>
            </div>
        </div>
    )
}
