import { FunctionalComponent, h } from 'preact';
import style from './style.scss';
import ComputerScreen from '../../assets/icons/computer-screen.svg';


const MonitorShowcase: FunctionalComponent = ({ children }) => {
    return (
        <div class={style.monitorShowcase}>
            <div className={style.monitorShowCase__device}>
                <ComputerScreen />
            </div>
            <div className={style.monitorShowcase__screenshot}>
                { children }
            </div>
        </div>
    )
};

export default MonitorShowcase;
