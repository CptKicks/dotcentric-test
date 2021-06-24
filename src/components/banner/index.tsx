import { FunctionalComponent, h } from 'preact';

interface Props {
    text: string;
    buttonText: string;
    buttonAction: Function;
}

const Banner: FunctionalComponent<Props> = (props: Props) => {

    const handleClick = ($event: MouseEvent): void => {
        $event.preventDefault();
        props.buttonAction();
    }

    return (
        <div className="bg-secondary py-4">
            <div className="container-lg container-fluid">
                <div className="row align-items-center justify-content-space-between">
                    <div className="col-lg-10 col-12 mb-lg-0 mb-3 text-lg-start text-center">
                        <div className="fs-3 fw-medium text-white">{props.text}</div>
                    </div>
                    <div className="col-lg-2 col-12 text-lg-end text-center">
                        <a className="btn btn-primary d-sm-inline-block d-block" onClick={handleClick}>{props.buttonText}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
