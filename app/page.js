import Image from "next/image";
import Nav from "./_components/Nav";
import Footer from "./_components/Footer";

export default function Home() {

  return (
    <>
      <Nav />


      <div id="page" className="hfeed site grid-container container grid-parent">
        <div id="content" className="site-content">
          <div
            id="primary"
            className="content-area grid-parent mobile-grid-100 grid-100 tablet-grid-100"
          >
            <main id="main" className="site-main">
              <article
                id="post-12848"
                className="post-12848 page type-page status-publish has-post-thumbnail infinite-scroll-item"
              >
                <div className="inside-article">
                  <div className="entry-content">
                    <div className="wp-block-columns alignfull has-2-columns bannr-gry is-layout-flex wp-container-3 wp-block-columns-is-layout-flex">
                      <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                        <div className="hg_ho_image">
                          <img
                            decoding="async"
                            src=" /pics/banner.png"
                            className="wp-image hg_ho_img"
                            alt="hand holding a coffee mug"
                          />
                        </div>
                      </div>
                      <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                        <div className="hg_ho_content">
                          <h1 className="hg_ho_heading">
                            <strong>Brew Better Coffee</strong>
                          </h1>
                          <p>
                            Learn to <strong>brew</strong> world-class coffee at
                            home without confusing yourself.
                            <br />
                            Click for free emails that will sharpen your
                            coffee skills
                          </p>
                          <p>
                            <a
                              href="/contact"
                              className="hg_ho_btn hg_ho_btn1"
                              style={{ backgroundColor: "#a0292a" }}
                            >
                              Contact Us
                            </a>
                            <a
                              href="https://www.youtube.com/channel/UCgk5vlpGa_SEok6taD8iodg"
                              className="hg_ho_btn hg_ho_btn2"
                              style={{ backgroundColor: "transparent" }}
                            >
                              See Us On Instagram
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>

                    <h2
                      className="wp-block-heading has-text-align-center hg_what_learn_heading"
                      id="learn-more"
                    >
                      {" "}
                      What do you want to learn?
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
                    <div id="about" className="container mx-auto px-4 py-8 lg:py-16">
                      <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div className="text-center lg:text-left">
                          <div className="who-we-are-block">
                            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Who are We?</h3>
                            <p className="text-gray-700 leading-relaxed">
                              A community of passionate coffee hobbyists, baristas, and travelers
                              who research, test, and share knowledge in the home barista market. We
                              strive to simplify home coffee brewing so that you can make better
                              decisions about buying and brewing quality coffee, without having to
                              be an expert.
                            </p>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="who-we-image">
                            <img
                              decoding="async"
                              src="/wp-content/uploads/2023/07/brista-pouring-coffee.jpg"
                              className="rounded-lg shadow-lg"
                              alt="Coffee Community Learning"
                            />
                          </div>
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
                          <div className="cmnarticlethumbcol text-center">
                            <div className="table_article_thumb">
                              <img
                                loading="lazy"
                                src="/pics/002.webp"
                                className="rounded-lg shadow-lg"
                                alt="Making coffee in the best home espresso machine"
                                decoding="async"
                              />
                            </div>
                          </div>
                          <div className="cmnarticlethumbcol text-center">
                            <div className="table_article_thumb">
                              <img
                                loading="lazy"
                                src="/pics/003.webp"
                                className="rounded-lg shadow-lg"
                                alt="Christmas gift basket with coffee beans in glass jar and two"
                                decoding="async"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div id="typer" className="container mx-auto px-4 py-8 lg:py-16">
                      <div className="grid lg:grid-cols-2 gap-8 items-center">
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
                              src="pics/005.webp"
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
                                src="/pics/007.webp"
                                className="rounded-lg shadow-lg"
                                alt="Selection Of Manual Brewers"
                                decoding="async"
                              />
                            </div>
                          </div>
                          <div className="cmnarticlethumbcol text-center">
                            <div className="table_article_thumb">
                              <img
                                loading="lazy"
                                src="/pics/008.webp"
                                className="rounded-lg shadow-lg"
                                alt="Making coffee in the best home espresso machine"
                                decoding="async"
                              />
                            </div>
                          </div>
                          <div className="cmnarticlethumbcol text-center">
                            <div className="table_article_thumb">
                              <img
                                loading="lazy"
                                src="/pics/009.webp"
                                className="rounded-lg shadow-lg"
                                alt="Christmas gift basket with coffee beans in glass jar and two"
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
