import { FunctionalComponent, h } from 'preact';
import style from './style.scss';

interface Props {
    text?: string;
}

export const SubmitButton: FunctionalComponent<Props> = (props: Props) => {
    return (
        <div className={style.submitButton}>
            <button className={`${style.submitButton__button} btn btn-primary`}>{props.text ? props.text : 'Submit'}</button>
        </div>
    );
}
