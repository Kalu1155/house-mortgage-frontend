import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
// import img_port from '../assets/images/shortcode/img_portfolio01.jpg'
import { Link } from 'react-router'
const Properties = () => {
    const [properties, setProperties] = useState([])
    const url = "http://localhost:3000/Properties"

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url)
                const data = await res.json();
                // const propData = Array.isArray(data.products) ? data.products : [];

                const formattedProp = data.map((properties) => ({
                    id: properties.id,
                    housename: properties.housename,
                    location: properties.location,
                    thumbnail: properties.thumbnail
                }))
                console.log(formattedProp)
                setProperties(formattedProp)
            } catch (error) {
                console.error("Error fetching data:", error)
            }
        };
        fetchData()
    }, [])

    return (
        <>
            <Navbar />
            <div id="site-wrapper">
                {/* <!-- /#site-header --> */}
                <div id="site-content">
                    <div id="page-header">
                        <div class="wrapper">
                            <h2 class="title">PROPERTIES</h2>
                            <div class="breadcrumbs">
                                <span class="trail-browse">You are here:</span>
                                <span class="trail-begin"><Link to="/" title="Konstruct" rel="home">Home</Link></span>
                                <span class="sep">/</span>
                                <Link to="/properties" title="Konstruct" rel="home">Properties</Link>

                            </div>
                        </div>
                    </div>
                    <div id="page-body">
                        <section class="portfolio showcase01">
                            <div class="wrapper">
                                <div class="portfolio-filters">
                                    <ul>
                                        <li class="active"><a data-filter="*" href="#">All</a></li>
                                        <li><a data-filter=".architecture" href="#">Architecture</a></li>
                                        <li><a data-filter=".buildings" href="#">Buildings</a></li>
                                        <li><a data-filter=".office" href="#">Office</a></li>
                                        <li><a data-filter=".interior-design" href="#">Interior Design</a></li>
                                    </ul>
                                </div>
                                <div class="portfolio-wrapper">
                                    <div class="entries-wrapper three-columns clearfix" >
                                        {properties.map((property) => (
                                            <article class="item architecture" key={property.id}>
                                                <div class="media gallery">
                                                    <img src={property.thumbnail} width="555" height="415" alt="" />
                                                    <div class="overlay">
                                                        <Link to={`/propertydetails/${property.id}`} class="readmore"><i class="fa fa-link"></i></Link>
                                                        <a href={property.thumbnail} class="quickview">
                                                            <i class="fa fa-search"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="title">
                                                    <h2><a href="#">{property.housename}</a></h2>
                                                    <p class="entry-meta">{property.location}</p>
                                                </div>
                                            </article>
                                        ))}
                                    </div>
                                </div>
                                {/* <p class="btn_viewall"><a class="flat_btn01" href="products.html" title="Projects" >View all Projects</a></p> */}
                            </div>
                        </section>
                    </div>
                    {/* <!-- /#page-body --> */}
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Properties