import { FunctionalComponent, h } from 'preact';
import style from '../style.scss';

export const Input: FunctionalComponent<any> = ({ id, name, label, register, options, error, suggestion, ...rest }) => {
    return <div className={style.formInput__wrapper}>
        <label className={style.formInput__label} htmlFor={id}>{label}</label>
        <div className={`${style.formInput__inputContainer} ${(options.required && !error) && style['formInput__inputContainer--required']} ${error ? style['formInput__inputContainer--error'] : ''}`}  >
            <input className={`${style.formInput__input} ${error && style['formInput__input--error']}`}
                   id={id} {...register(name, options)} {...rest} />
        </div>
        <div className={style.formInput__indications}>
            { (suggestion && !error ) && <span>{suggestion}</span>}

            { error?.type === 'required' && <span className={style.formInput__error}>Error: This field is required</span> }
            { error?.type === 'pattern' && <span className={style.formInput__error}>Error: {error.message}</span>}
        </div>
    </div>;
}

export default Input;
