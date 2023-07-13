import React from 'react'

const MenuCard = ({menuData}) => {
    console.log(menuData);
    const myStyle={color:"red"};
    return (
        <>
            <section className="main-card--cointainer">
            {menuData.map((currElem)=>{
                return(
                    <>
                    <div className="card-container" key={currElem.id}>
                        <div className="card">
                            <div className="card-body">
                                <span className="card-number card-circle subtle">{currElem.id}</span>
                                <span className="card-author subtle" style={myStyle}/* style={{color:"red"}} */>{currElem.category}</span>
                                <h2 className="card-title">{currElem.name}</h2>
                                <span className="card-description subtle">{currElem.description}</span>
                                <div className="card-read">Read</div>
                            </div>
                            <img src={currElem.image} alt="images" className="card-media" />
                            <span className="card-tag subtle">Order Now</span>
                        </div>
                    </div>
                    </>
                );
            })}
            </section>
        </>
    )
}

export default MenuCard
