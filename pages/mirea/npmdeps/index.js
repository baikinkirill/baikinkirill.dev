import Header from "../../../components/Header"
import styles from "./index.module.scss"
import { useState } from "react"

let n = 0;

export default function Index(props) {
  const [url, setUrl] = useState("")
  const [status, setStatus] = useState("")
  let res = ""

  const search=(name)=>{
    fetch("https://api.allorigins.win/raw?url=https://registry.npmjs.org/" +name)
      .then((res) => res.json())
      .then((data) => {
        let last = {}
        for (var i in data.versions)
          last = data.versions[i]
        let buff = last.dependencies
        for (var i in buff) {
          let q = i
          if (q !== null) {
            n++
            if(n>200)
              return
            q = q.replaceAll("@", "")
            q = q.replaceAll("/", "")
            q = q.replaceAll("node", "nodejs")
            q = q.replaceAll("-", "_")
            q = q.replaceAll(".", "")
            name=name.replaceAll("-","_")
            name=name.replaceAll("@","")
            name=name.replaceAll("/","")
            name=name.replaceAll(".","")
            res = res + name + "->" + q + ";"
            console.log(name)
          }
        }


        setUrl(`https://quickchart.io/graphviz?format=png&graph=digraph{${res}}`)
      })
      .catch(()=>{
      })
  }

  return (
    <div>

      <Header />

      <div className={styles.parent}>
        <h1>Поиск зависимостей в <code>NPM</code></h1>
        <input id={"input"} placeholder={"Напишите что-нибудь. Например, next, react-native или expo"} />

        <img src={url} />
        <h4 style={{maxWidth:"700px"}}>{status}</h4>

        <button onClick={() => {
          let t = document.getElementById("input").value
          setStatus("Ищу")
          setUrl("")
          fetch("https://api.allorigins.win/raw?url=https://registry.npmjs.org/" + t.toString())
            .then((res) => res.json())
            .then((data) => {
              let last = {}
              for (var i in data.versions)
                last = data.versions[i]
              let buff = last.dependencies
              if(buff==undefined){
                setStatus("Зависимости не найдены.")
              }else if(buff.length==0){
                setStatus("Зависимости не найдены.")
              }
              for (var i in buff) {
                n++
                if(n>200)
                  return
                let q = i
                if (q !== null) {
                  search(q)
                  q = q.replaceAll("@", "")
                  q = q.replaceAll("/", "")

                  q = q.replaceAll("node", "nodejs")
                  q = q.replaceAll("-", "_")
                  t=t.replaceAll("-","_")
                  res = res + t + "->" + q + ";"
                }
              }
              console.log(res)
              setStatus("")
              if(res==="")
                setStatus("Зависимости не найдены.")

              setUrl(`https://quickchart.io/graphviz?format=png&graph=digraph{${res}}`)
            })
            .catch(()=>{
              setStatus("Произошла ошибка. Промежуточный сервис временно недоступен. Повторите запрос через минуту")
            })
        }}>Найти
        </button>
      </div>

    </div>
  )
}
