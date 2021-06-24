import { FunctionalComponent, h } from 'preact';
import SectionHeading from '../../components/section-heading';
import Banner from '../../components/banner';
import { route } from 'preact-router';
import MonitorShowcase from '../../components/monitor-showcase';
import Blockquote from '../../components/blockquote';
import ContactForm from '../../components/contact-form';
import ServiceBadge from '../../components/service-badge';
import { useEffect, useState } from 'preact/hooks';
import { Service } from '../../utils/models/service';

const Home: FunctionalComponent = () => {
    const [services, setServices] = useState<Service[]>([]);

    useEffect(() => {
        fetch('https://api.mocki.io/v2/561baaaa')
            .then(response => response.json())
            .then(data => { setServices(data.services) })
    }, []);

    return (
        <div>
            <section className="section mb-0">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <SectionHeading title="We Do Awesome Things">
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                            </SectionHeading>
                        </div>

                        <div className="col-lg-9 col-12">
                            <MonitorShowcase>
                                <img class="w-100"
                                     alt="Tropical Summer App"
                                    srcSet="../../assets/img/tropical-summer-app-327.jpg 327w,
                                            ../../assets/img/tropical-summer-app-510.jpg 510w,
                                            ../../assets/img/tropical-summer-app-654.jpg 654w,
                                            ../../assets/img/tropical-summer-app-1020.jpg 1020w,
                                            ../../assets/img/tropical-summer-app-1604.jpg 1604w"
                                    sizes="(min-width: 1200px) 802px,
                                           (min-width: 768px) and (max-width: 1199.98px) 684px,
                                           (min-width: 576px) and (max-width: 767.98px) 505px,
                                           calc(100vw - 30px)"
                                />
                            </MonitorShowcase>
                        </div>
                    </div>
                </div>
            </section>

            <Banner text="Lorem ipsum dolor sit amet, consectetur adispiscing elit." buttonText="Call Now" buttonAction={ (): boolean => route('/') } />

            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <SectionHeading title="We Do Really Awesome Things">
                                <span>Lorem ipsum dolor sit amet, <a key="reallyAwesomeLink" href={'/'}>link</a> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                            </SectionHeading>
                        </div>
                    </div>

                    {services.length > 0 &&
                        <div className="row my-n2">
                                    {services.map( ((service) =>
                                        <div key={service.id}  className="col-lg-4 col-12 py-2">
                                                <ServiceBadge id={service.id} name={service.name} description={service.description} image={service.image} />
                                        </div>
                                    ))}
                        </div>
                    }
                </div>
            </section>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Blockquote text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} author={'Roy Barber - Dotcentric'} />
                    </div>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <SectionHeading title="Contact About Awesomeness">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </SectionHeading>
                        </div>

                        <div className="col-lg-7 col-md-9 col-12">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
