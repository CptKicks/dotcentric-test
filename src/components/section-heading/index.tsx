import { FunctionalComponent, h } from 'preact';

interface Props {
    title: string;
    subtitle: any;
}

const SectionHeading: FunctionalComponent<Props> = (props: Props) => {
    return (
        <div className="row justify-content-center mb-lg-7 mb-5">
            <div className="col-lg-8 col-md-10 col-12">
                <div className="text-center">
                    <div className="fs-1">{props.title}</div>
                    <div className="fs-4 fw-light text-grey">
                        {props.subtitle}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionHeading;
