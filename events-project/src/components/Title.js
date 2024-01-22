import "./Title.css"
export default function Title(props){// yokida Title({title, subtitle}) shunaqa qilib propslarni olib keyin funksiyaga qo'ysak bo'ladi.
    return (
        <div>
            <h1 className="title">{props.title}</h1>
            <br />
            <h2 className="subtitle">{props.subtitle}</h2>
        </div>
    )
}