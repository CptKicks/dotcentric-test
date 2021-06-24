import { FunctionalComponent, h } from 'preact';
import style from './style.scss';
import QuotationMarks from '../../assets/icons/quotation-mark.svg';

interface Props {
    text: string;
    author: string;
}

const Blockquote: FunctionalComponent<Props> = (props: Props) => {
    return (
        <div class={style.blockquote}>
            <div class={style.blockquote__quotationMarks}>
                <QuotationMarks />
            </div>
            <div class={style.blockquote__textContainer}>
                <div className={`${style.blockquote__text} fs-3`}>
                    {props.text}
                </div>
                <div className={`${style.blockquote__author} fs-5`}>
                    {props.author}
                </div>
            </div>

        </div>
    );
};

export default Blockquote;
