import s from './Layout.module.css';
import bg3 from '../images/bg3.jpg';

const Layout = (props) => {
    return (
        <section class={s.root} id={props.id}>
            <div class={s.wrapper}>
                <article>
                    <div class={s.title}>
                        <h3>{props.title}</h3>
                        <span class={s.separator}></span>
                        <img src={bg3}/> 
                    </div>
                    <div class={s.desc.full}>
                        <p>{props.desc}</p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;