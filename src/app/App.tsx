import s from './styles/index.module.scss';
import Main from "../pages/Main/Main";

export const App = () => {
    return (
        <div className={s.app}>
            <Main/>
        </div>
    )
}
