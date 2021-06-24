import { FunctionalComponent, h } from 'preact';
import style from './style.scss';
import { Service } from '../../utils/models/service';

const ServiceBadge: FunctionalComponent<Service> = (props: Service) => {
    return (
        <div class={style.serviceBadge}>
            <div className={style.serviceBadge__icon}>
                <img src={props.image} />
                <div className={style.serviceBadge__indexCircle}>{props.id}</div>
            </div>
            <div className="fs-3 fw-medium mb-1">{props.name}</div>
            <div className="fs-5 fw-light text-grey">{props.description}</div>
        </div>
    )
}

export default ServiceBadge;
