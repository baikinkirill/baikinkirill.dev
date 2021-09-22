import Header from "../../../components/Header"
import styles from './index.module.scss'

export default function Index(props) {

  return (
    <div>
      <Header />

      <div className={styles.parent}>
        <h1>Поиск зависимостей в <code>NPM</code></h1>
        <input id={"input"} placeholder={"Напишите что-нибудь. Например, redux"}/>
        <button onClick={()=>{
          let t = document.getElementById("input").value

          fetch("https://registry.npmjs.org/"+t.toString())
            .then((res)=>res.json())
            .then((data)=>{
              let last={}
              for (var i in data.versions)
                last = i;
              console.log(last.devDependencies)
            })

        }}>Найти</button>
      </div>

    </div>
  )
}
