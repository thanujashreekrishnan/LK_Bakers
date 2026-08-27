import cakeImg from "url:../../images/cake.png";
import cupcakeImg from "url:../../images/cupcake.png";
import { useEffect, useState } from "react";
import ItemsCard from "./ItemsCard";
import Shimmer from "./Shimmer";
const SearchBar = () => {
    const [items, setItems] = useState([]);
    const [seachtext, setSearchText] = useState("");
    const [filteredItems, setFilteredItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetchdata();
    },[])
    const fetchdata = async() =>{
        const data = await fetch("https://apis.bakingo.com/api/bakingo/best-seller?metainfo=1&page=2&page=2&fc_cn=undefined&current_page=1");
        const json = await data.json();
        const bakeryItems = json.data?.results;
        setItems(bakeryItems);
        setFilteredItems(bakeryItems);
        setLoading(false);

    }
    return (
        <>
            <div className="search-bar">
                <img src={cakeImg} alt="Cake" className="cake-image" />
                <div className="search-text">
                    <h5>Made with love, deliverd with care</h5>
                    <h2>Delicious Treats</h2>
                    <h4>for every celebration!</h4>
                    <div>
                        <input type="search" className="search-container" placeholder="Search for cakes, cupcakes, pastries..."
                            onChange={(event) => {
                                setSearchText(event.target.value);
                                const filtered = items.filter((item) =>
                                    item.title.toLowerCase().includes(event.target.value.toLowerCase())
                                );
                                setFilteredItems(filtered);

                            }}
                        />

                    </div>
                </div>
                <img
                    src={cupcakeImg}
                    alt="Cupcake"
                    className="cupcake-image"
                />
            </div>

            <div className="search-results">

                {loading ? (

                    <div className="items-list">
                        {Array(10)
                            .fill("")
                            .map((_, index) => (
                                <Shimmer key={index} />
                            ))}
                    </div>

                ) : (

                    <div className="items-list">
                        {filteredItems.map((item) => (
                            <ItemsCard
                                key={item.node_id}
                                itemData={item}
                            />
                        ))}
                    </div>

                )}

            </div>
        </>
    )
}

export default SearchBar;