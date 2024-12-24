"use client"

import Image from "next/image";
import Nav from "./_components/Nav";
import Footer from "./_components/Footer";
import Loading from './_components/Loading';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {


  const [loading, setLoading] = useState(true);

  useEffect(() => {
      // Simulate a loading delay of 2 seconds
      const timer = setTimeout(() => {
          setLoading(false);
      }, 5000);

      return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <>
    {loading && <Loading />}
      <Nav />


      <div id="page" className="hfeed site grid-container container grid-parent">
        <div id="content" className="site-content">
          <div
            id="primary"
            className=" "
          >
            <main id="main" className="site-main">
              <article
                className=" "
              >
                <div className=" ">
                  <div className=" ">




                    <div className="relative w-full h-screen">
                      {/* Video Background */}
                      <video
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                      >
                        <source src="/pics/vid1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>

                      {/* Overlay Content */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        {/* Logo */}
                        <img
                          src="/pics/logo2.png"
                          alt="Logo"
                          className="mb-4 w-74 md:w-72"
                          style={{ objectFit: 'contain' }}
                        />

                        {/* Title */}
                        <h1
                          style={{
                            margin: '0',
                            fontSize: "47px",
                            textWrapMode: "nowrap",
                          }}
                          className="text-white text-2xl md:text-4xl font-bold"
                        >
                          Coffee Adnan
                        </h1>

                        {/* Year with Horizontal Lines */}
                        <div className="flex items-center">
                          <hr style={{ borderWidth: "1px", background: "white" }} className="w-16 md:w-24 border-t-4 border-white" />
                          <span className="mx-4 text-lg md:text-xl font-bold">1951</span>
                          <hr style={{ borderWidth: "1px", background: "white" }} className="w-16 md:w-24 border-t-4 border-white" />
                        </div>
                      </div>
                    </div>















             




                    <div id="about" className="container mx-auto px-4 py-8 lg:py-16">
                      <div className="grid lg:grid-cols-2 gap-8 items-center">

                      <div className="container mx-auto px-4 py-8">
                              <h1 className="text-3xl font-bold text-center mb-6">Who are We?</h1>
                              <p className="text-lg text-gray-700 mb-4">
                                Coffee Adnan is a prominent Lebanese coffee company that was established in 1951, with a rich heritage in providing high-quality coffee products to the local market and beyond. Based in Beirut, Lebanon, the company has built a strong reputation over the decades for its dedication to the craft of coffee roasting and blending.
                              </p>
                              <div className="text-center">
                          <div className="who-we-image">
                            <img
                              decoding="async"
                              src="/pics/002.webp"
                              className="rounded-lg shadow-lg"
                              alt="Coffee Community Learning"
                            />
                          </div>
                        </div>
                              <section className="mt-8">
                                <h2 className="text-2xl font-semibold mb-4">Key aspects of our company:</h2>
                                <ol style={{textAlign:'left'}} className="list-decimal space-y-4">
                                  <li>
                                    <strong>Legacy and Tradition:</strong> With over seven decades of experience, Coffee Adnan has become one of the most trusted names in the coffee industry in Lebanon. The company has a long history of serving both traditional and modern coffee lovers, offering products that are rooted in Lebanese coffee culture.
                                  </li>
                                  <li>
                                    <strong>Products and Services:</strong> Coffee Adnan specializes in premium Arabic coffee blends, often roasting beans in small batches to ensure quality and consistency. Their product range includes ground coffee, whole beans, and catering to the preferences of a diverse customer base. They are known for blending rich flavors that are associated with traditional Lebanese coffee.
                                  </li>
                                  <li>
                                    <strong>Roasting and Blending Expertise:</strong> The company is recognized for its meticulous approach to the coffee roasting process. Coffee Adnan’s signature blends are created with high-quality beans sourced from various regions, roasted to perfection to enhance their distinct flavors.
                                  </li>
                                  <li>
                                    <strong>Local and International Reach:</strong> While Coffee Adnan started in Beirut, the company has expanded its reach and now serves customers not only in Lebanon but also in international markets, particularly in the Middle East and the Arab diaspora.
                                  </li>
                                  <li>
                                    <strong>Commitment to Quality:</strong> The company is committed to maintaining high standards in both the sourcing of its beans and the production process. This commitment to quality ensures that each cup of Coffee Adnan represents the best of Lebanese coffee culture.
                                  </li>
                                  <li>
                                    <strong>Cultural Heritage:</strong> Coffee Adnan holds a special place in the cultural and social traditions of Lebanon. In Lebanese society, coffee is a symbol of hospitality, and the brand has contributed significantly to this aspect by offering a product that reflects the warmth and generosity of Lebanese culture.
                                  </li>
                                  <li>
                                    <strong>Sustainability and Innovation:</strong> In more recent years, Coffee Adnan has made strides in sustainability, working to ensure that their coffee is ethically sourced and produced in an environmentally responsible manner. At the same time, the company continues to innovate by exploring new coffee varieties and brewing techniques to meet changing consumer demands.
                                  </li>
                                </ol>
                              </section>

                            </div>
                        <div className="text-center">
                          <div className="who-we-image">
                            <img
                              decoding="async"
                              src="/pics/009.webp"
                              className="rounded-lg shadow-lg"
                              alt="Coffee Community Learning"
                            />
                          </div>
                        </div>

                        <div className="mt-8 text-center">
                                <button
                                  className="px-6 py-3 text-white bg-[#a0292a] rounded-lg shadow-md hover:bg-[#8c2326] transition duration-300"
                                  onClick={() => window.location.href = '/contact'}
                                >
                                  Contact Us
                                </button>
                              </div>

                      </div>
                    </div>







                    <h2
                      className="wp-block-heading has-text-align-center hg_what_learn_heading"
                      id="learn-more"
                    >
                      {" "}
                      Learn More About Coffee
                    </h2>
                    <div className="hg_home_what_learn">
                      <div className="hg_wl_tiles">
                        <div className="hg_wl_tile has-thumbnail">
                          <a href="#history">
                            <div className="hg_wl_image">
                              <img
                                decoding="async"
                                src="/wp-content/uploads/2019/10/learn-1.png"
                                alt="Home Roasting"
                              />
                            </div>
                            <h3 className="hg_wl_title">History of Coffee</h3>
                          </a>
                        </div>
                        <div className="hg_wl_tile has-thumbnail">
                          <a href="#typer">
                            <div className="hg_wl_image">
                              <img
                                decoding="async"
                                src="/wp-content/uploads/2019/10/learn-2.png"
                                alt="Choosing Coffee Gear"
                              />
                            </div>
                            <h3 className="hg_wl_title">Types of Roasts</h3>
                          </a>
                        </div>
                        <div className="hg_wl_tile has-thumbnail">
                          <a href="#varieties">
                            <div className="hg_wl_image">
                              <img
                                decoding="async"
                                src="/wp-content/uploads/2019/10/learn-3.png"
                                alt="Choosing a Brew Method"
                              />
                            </div>
                            <h3 className="hg_wl_title">Coffee Varieties</h3>
                          </a>
                        </div>
                        <div className="hg_wl_tile has-thumbnail">
                          <a href="#typec">
                            <div className="hg_wl_image">
                              <img
                                decoding="async"
                                src="/wp-content/uploads/2019/10/learn-4.png"
                                alt="Choosing Coffee Beans"
                              />
                            </div>
                            <h3 className="hg_wl_title">Types of Coffee</h3>
                          </a>
                        </div>

                      </div>
                    </div>










                    <div id="history" className="container mx-auto px-4 py-8 lg:py-16">
                      <div className="outer_article_table_thumbrow">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-center">History of Coffee</h2>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                          <b>Discovery in Ethiopia (9th Century)</b>
                          <br />
                          The origins of coffee are often linked to the 9th century in Ethiopia. Legend has it that a goat herder named Kaldi discovered coffee when he noticed that his goats became energetic after eating berries from a particular tree. Curious about the effects, Kaldi tried the berries himself, and soon after, he felt the same burst of energy. Monks in a local monastery then began to brew a drink from the beans to stay awake during their long prayers.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                          <div className="cmnarticlethumbcol text-center">
                            <div className="table_article_thumb">
                              <img
                                loading="lazy"
                                src="/pics/001.webp"
                                className="rounded-lg shadow-lg"
                                alt="Selection Of Manual Brewers"
                                decoding="async"
                              />
                            </div>
                          </div> 
                        </div>
                      </div>
                    </div>


                    <div id="typer" className="container mx-auto px-4 py-8 lg:py-16">
                      <div className="grid lg:grid-cols-2 gap-8 items-center">

                        <div className="text-center lg:text-left">
                          <div className="who-we-are-block">
                            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Types of Roasts</h3>
                            <p className="text-gray-700 leading-relaxed">
                              <li>Light Roast</li>
                              Retains most of the coffee's natural flavors with a mild, acidic taste.
                              Beans have a light brown color and no oily surface.

                              <li>Medium Roast</li>
                              Balanced flavor with moderate acidity and body.
                              Beans are medium brown with a smoother taste compared to light roast.

                              <li>Dark Roast</li>
                              Bold and smoky with a bitter-sweet profile.
                              Beans are shiny, blackish-brown with a noticeable oil layer.
                            </p>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="who-we-image">
                            <img
                              decoding="async"
                              src="/pics/004.webp"
                              className="rounded-lg shadow-lg"
                              alt="Coffee Community Learning"
                            />
                          </div>
                        </div>

                      </div>
                    </div>

                    <div id="varieties" className="container mx-auto px-4 py-8 lg:py-16">
                      <div className="grid lg:grid-cols-2 gap-8 items-center">

                        <div className="text-center lg:text-left">
                          <div className="who-we-are-block">
                            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Coffee Varieties</h3>
                            <p className="text-gray-700 leading-relaxed">

                              <b>Arabica:</b> Known for its mild flavor and aromatic profile, it's the most popular coffee variety, accounting for 60-70% of global production.
                              <br />
                              <b>Robusta:</b> Stronger and more bitter, with a higher caffeine content, often used in espresso blends.
                              <br />
                              <b>Liberica:</b> Rare and unique, with a distinctive fruity and floral flavor, grown primarily in Southeast Asia and Africa.
                            </p>
                          </div>
                        </div>

                        <div className="text-center">
                          <div className="who-we-image">
                            <img
                              decoding="async"
                              src="pics/003.webp"
                              className="rounded-lg shadow-lg"
                              alt="Coffee Community Learning"
                            />
                          </div>
                        </div>

                      </div>
                    </div>


                    <div id="typec" className="container mx-auto px-4 py-8 lg:py-16">
                      <div className="outer_article_table_thumbrow">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-center">Types of Coffee</h2>
                        <p className="text-gray-700 mb-6 leading-relaxed">


                          <li><b>Espresso:</b> A strong, concentrated coffee brewed by forcing hot water through finely-ground coffee beans. It forms the base for many coffee drinks.</li>

                          <li><b>Americano:</b> Espresso diluted with hot water for a milder flavor.</li>

                          <li><b>Latte:</b> Espresso mixed with steamed milk and topped with a light layer of foam.</li>

                          <li><b>Cappuccino:</b> Equal parts espresso, steamed milk, and milk foam, often topped with cocoa or cinnamon.</li>

                          <li><b>Macchiato:</b> Espresso "stained" with a small amount of milk or foam.</li>

                          <li><b>Mocha:</b> A blend of espresso, chocolate syrup, and steamed milk, topped with whipped cream.</li>

                          <li><b>Flat White:</b> Similar to a latte but with a smoother texture, achieved using microfoam.</li>

                          <li><b>Cold Brew:</b> Coffee steeped in cold water for 12-24 hours, resulting in a smooth, low-acidity drink.</li>

                          <li><b>French Press:</b> Coarsely ground coffee steeped in hot water, then filtered using a plunger. </li>



                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                          <div className="cmnarticlethumbcol text-center">
                            <div className="table_article_thumb">
                              <img
                                loading="lazy"
                                src="pics/005.webp"
                                className="rounded-lg shadow-lg"
                                alt="Selection Of Manual Brewers"
                                decoding="async"
                              />
                            </div>
                          </div>
 
                        </div>
                      </div>
                    </div>

                    <p />
                  </div>
                  {/* .entry-content */}
                </div>
                {/* .inside-article */}
              </article>
              {/* #post-## */}
            </main>
            {/* #main */}
          </div>
          {/* #primary */}
        </div>
        {/* #content */}
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n  .entry-content .alignwide, body:not(.no-sidebar) .entry-content .alignfull {\n    width:auto !important;\n}\n\nbody #page.grid-container {\n    max-width: 100% !important;\n}\n"
        }}
      />

      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n  @media (min-width: 320px) and (max-width: 670px) {\n    .main-navigation.toggled .main-nav>ul { \n        top: 105px !important; \n    }\n}\n\n@media (max-width: 768px) {\n    .main-navigation.toggled .main-nav li:nth-last-child(2) {\n        display: inline !important;\n    }\n}\n"
        }}
      />

      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n \n.hg_home_what_learn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap; /* Ensures the tiles wrap if there's not enough space */\n  padding: 20px;\n}\n\n.hg_wl_tiles {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap; /* Ensures the tiles stack on smaller screens */\n  gap: 20px; /* Adds space between tiles */\n}\n\n.hg_wl_tile {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  padding: 10px;\n  max-width: 200px; /* Optional: control tile size */\n}\n\n.hg_wl_image img {\n  display: block;\n  margin: 0 auto;\n  width: 30%;  \n \n}\n\n.hg_wl_title {\n  margin-top: 10px;\n  font-size: 1rem; /* Adjust font size as needed */\n  text-align: center;\n}\n\n"
        }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n @media (min-width: 320px) and (max-width: 670px) {\n    a.hg_ho_btn { \n        line-height: 0px !important;\n        \n    }\n}\n\n"
        }}
      />



      <Footer />


      <style
        dangerouslySetInnerHTML={{
          __html: "\n.inside-header {\n    padding: 15px 0px;!important\n}\n\n"
        }}
      />
    </>

  );
}
