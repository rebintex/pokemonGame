import s from './Layout.module.css';
import bg3 from '../images/bg3.jpg';

const Layout = ({id, title, descr, urlBg, colorBg}) => {
    // const style = {
    //     background: urlBg ? ‘url(${urlBg})’ : colorBg
    // };
    
    return (
        <section class={s.root} id={id}>
            <div class={s.wrapper}>
                <article>
                    <div class={s.title}>
                        <h3>{title}</h3>
                        <span class={s.separator}></span>
                        <img src={bg3}/> 
                    </div>
                    <div class={s.desc.full}>
                        <p>{descr}</p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;