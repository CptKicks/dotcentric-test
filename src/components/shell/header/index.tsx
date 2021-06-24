import { FunctionalComponent, h } from 'preact';
import style from './style.scss';
import PrimaryLogo from '../../../assets/logo/primary.svg';
import MenuSolid from '../../../assets/icons/menu-solid.svg';
import MenuClose from '../../../assets/icons/close-solid.svg';
import { route } from 'preact-router';

interface Props {
    canvasOffset: string;
    setCanvasOffset: Function;
}

const Header: FunctionalComponent<Props> = (props: Props) => {
    const closeMenu = (): void => {
        props.setCanvasOffset('');
    };

    const openMenu = (): void => {
        props.setCanvasOffset(`transition: 0.5s all; transform: translate3d(${style.menuOffset}, 0, 0);`);
    };

    const toggleMenu = (): void => {
        if (props.canvasOffset) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    const linkClick = (path: string): void => {
        closeMenu();
        route(path, true);
    }

    return (
        <header className={style.header} style={props.canvasOffset}>
            <div className="container">
                <div className={style.header__container}>
                    <div className={style.header__logo}>
                        <PrimaryLogo />
                    </div>
                    <div className={style.header__menuIcon} onClick={toggleMenu}>
                        { props.canvasOffset ? <MenuClose /> : <MenuSolid /> }
                    </div>

                    { props.canvasOffset && <div className={style.header__overlay} onClick={toggleMenu} /> }
                    <div className={style.header__nav}>
                        <a className={style.header__nav__link} onClick={(): void => {linkClick('/')}} >About Us</a>
                        <a className={style.header__nav__link} onClick={(): void => {linkClick('/')}}>About You</a>
                        <a className={style.header__nav__link} onClick={(): void => {linkClick('/')}}>Portfolio</a>
                        <a className={style.header__nav__link} onClick={(): void => {linkClick('/')}}><div className={`btn btn-secondary text-white`}>Contact</div></a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
