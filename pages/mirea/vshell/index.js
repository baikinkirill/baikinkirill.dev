import Header from "../../../components/Header";
import {useEffect, useState} from "react";
import commands from "./commands";
import JSZip from 'jszip'
import $ from 'jquery'
import {Head} from "next/document";

let setstp = null

let storage = {}

function add(isDir, path, date,data="") {
    let bpath = path.split("/")
    if(bpath.length>1){
        if(bpath[1]===""){
            date[bpath[0]]={}
        }else{
            add(isDir,path.replace(bpath[0]+"/",""),date[bpath[0]],data)
        }
    }else{
        date[path]=data
    }
}



function handleFile() {
    $("#file").on("change", function (evt) {
        let b=evt.target.value.toString().split(".")
        if(b[b.length-1]!=="zip"){
            alert("Это не zip архив")
            window.location.reload()
        }
        function handleFile(f) {
            JSZip.loadAsync(f)
                .then(function (zip) {
                    zip.forEach(function (relativePath, zipEntry) {
                        if(!zipEntry.dir){
                            (zip.file(zipEntry.name).async("string").then((r)=>{
                                add(zipEntry.dir,zipEntry.name,storage,r)
                            }))
                        }
                        add(zipEntry.dir,zipEntry.name,storage)

                        setTimeout(() => {
                            setstp(3)
                        }, 0)
                    });
                }, function (e) {
                })
                .catch((e)=>{
                    alert("Ошибка")
                    window.location.reload()

                })
        }

        var files = evt.target.files;
        for (var i = 0; i < files.length; i++) {
            handleFile(files[i]);
        }
    });
}

export default function Index() {
    let data = {
        a: {
            b: {
                c: "kl",
                j: "kkl"
            }
        }
    }

    function foo(date) {
        for (let i in date) {
            if (i == "c") {
                date[i] = "d465sa"
                return
            } else {
                foo(date[i])
                return;
            }
        }
    }

    foo(data)


    const [startPage, setStartPage] = useState(1)
    setstp = setStartPage

    // setTimeout(()=>setStartPage(2),1000)
    if (startPage == 1) {
        return (<div><GetArchive setStartPage={setStartPage}/></div>)
    } else if (startPage == 2) {
        return (<div><Loader/></div>)

    }

    return (
        <div>
            <Header/>

            <Terminal/>
        </div>
    )
}


function GetArchive(props) {
    const [height, setHeight] = useState(0)

    useEffect(() => {
        setHeight(window.innerHeight)
        handleFile()
    }, [])
    return (
        <div>
            <Header/>
            <div style={{
                width: "100vw",
                display: "flex",
                justifyContent: "center",
                height: height - 200,
                alignItems: "center",
                flexDirection: "column"
            }}>
                <h1 style={{textAlign: "center", padding: "10px"}}>Для начала работы загрузите образ системы</h1>
                <div className="example-2">
                    <div className="form-group">
                        <input accept=".zip" onChange={() => props.setStartPage(2)} type="file" name="file" id="file"
                               className="input-file"/>
                        <label style={{textAlign:"center"}} htmlFor="file" className="btn btn-tertiary js-labelFile">
                            <span className="js-fileName">Загрузить .zip файл</span>
                        </label>
                    </div>
                    <div style={{textAlign:"center",color:"gray",marginTop:"10px",fontSize:"14px",cursor:"pointer"}} onClick={()=>{
                        storage={
                            bin:{
                                docker:{dockerfile:`
FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080
CMD [ "node", "server.js" ]
                                
                                `,container:{}},
                            },
                            boot:{},
                            dev:{},
                            etc:{},
                            home:{},
                            lib:{},
                            lib32:{},
                            lib64:{},
                            libx32:{},
                            root:{},
                            media:{},
                            mnt:{},

                        }
                        setstp(3)
                    }}>Или ипользовать готовый образ.</div>
                </div>
            </div>
        </div>
    )
}

function Loader() {
    const [height, setHeight] = useState(0)

    useEffect(() => {
        setHeight(window.innerHeight)
        handleFile()
    }, [])
    return (
        <div>
            <Header/>
            <div style={{
                width: "100vw",
                display: "flex",
                justifyContent: "center",
                height: height - 57,
                alignItems: "center",
                flexDirection: "column"
            }}>
                <div className="cssload-wrap">
                    <div className="cssload-circle"></div>
                    <div className="cssload-circle"></div>
                    <div className="cssload-circle"></div>
                    <div className="cssload-circle"></div>
                    <div className="cssload-circle"></div>
                    <div className="cssload-circle"></div>
                    <div className="cssload-circle"></div>
                    <div className="cssload-circle"></div>
                    <div className="cssload-circle"></div>
                    <div className="cssload-circle"></div>
                    <div className="cssload-circle"></div>
                    <div className="cssload-circle"></div>
                    <div className="cssload-circle"></div>
                    <div className="cssload-circle"></div>
                    <div className="cssload-circle"></div>
                    <div className="cssload-circle"></div>
                    <div className="cssload-circle"></div>
                    <div className="cssload-circle"></div>
                    <div className="cssload-circle"></div>
                    <div className="cssload-circle"></div>
                    <div className="cssload-circle"></div>
                    <div className="cssload-circle"></div>
                    <div className="cssload-circle"></div>
                    <div className="cssload-circle"></div>
                    <div className="cssload-circle"></div>
                    <div className="cssload-circle"></div>
                    <div className="cssload-circle"></div>
                    <div className="cssload-circle"></div>
                    <div className="cssload-circle"></div>
                    <div className="cssload-circle"></div>
                </div>
            </div>
        </div>
    )
}


class Terminal extends React.Component {
    constructor(props) {
        super(props);
        this.data = new stateClass()

        this.state = {
            data: [],
            height: 0
        }

    }

    componentDidMount() {
        this.setState({height: window.innerHeight})
        window.onresize = () => {
            this.setState({height: window.innerHeight})
        }
        document.addEventListener("keydown", (e) => {
            if (e.which == 13) {
                let input = document.getElementById("input")
                let buff = input.value
                this.setState({data: this.data.pushCommand(buff)})
                let ans = commands(buff, this.data,storage)
                if (ans[0] == -1) {
                    this.setState({data: this.data.pushErrorMessage(ans[1], "bash", ans[2])})
                } else if (ans[0] == 1) {
                    this.setState({data: this.data.pushMessage(ans[1])})
                } else if (ans[0] == 0) {
                }
                setTimeout(() => input.value = "")
                let terminal = document.getElementById("terminal")
                terminal.scrollTo(0, terminal.scrollHeight)
            }
        })
    }

    render() {


        return (
            <div
                onClick={() => {
                    document.getElementById("input").focus()
                }}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: "5px",
                    width: "100vw",
                    height: this.state.height - 57
                }}>
                <div
                    id={"terminal"}
                    style={{
                        backgroundColor: "black",
                        width: "100vw",
                        height: this.state.height - 57,
                        maxWidth: "900px",
                        maxHeight: "800px",
                        padding: "5px",
                        wordWrap: "break-word",
                        lineBreak: "auto",
                        hyphens: "manual",
                        wordBreak: "keep-all",
                        overflowWrap: "break-word",
                        overflowX: "hidden"
                    }}>
                    {this.state.data.map((e) => {
                        return (
                            <div style={{display: "flex", color: "lightgreen"}}>
                                <div>
                                    {e.user}
                                </div>
                                <div>
                                    {e.path}
                                </div>
                                <div>
                                    {e.command.split("\n").map((ef)=>{
                                        return <div>{ef}</div>
                                    })}
                                </div>
                            </div>
                        )
                    })}
                    <div style={{color: "lightgreen", display: "flex", width: "100%"}}>
                        <div>
                            {this.data.getUser()}@localhost:{this.data.getPath()}#
                        </div>
                        <div style={{width: "100%"}}>
                            <input id={"input"} style={{
                                backgroundColor: "transparent",
                                border: "none",
                                outline: "none",
                                color: "lightgreen",
                                width: "99%",

                                paddingLeft: "5px", fontSize: "14px"
                            }}/>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}


class stateClass {

    constructor() {
        this.state = []
        this.path = "/"
        this.user = "user"
    }

    getUser() {
        return this.user
    }

    getPath() {
        return this.path
    }

    setPath(path) {
        this.path = path
    }

    getState() {
        return this.state
    }

    pushCommand(command) {
        this.state.push({path: this.path, command: "# " + command, user: this.user + "@localhost:"})
        return this.state
    }

    pushErrorMessage(command, user, message) {
        this.state.push({command: "-" + user + ": " + command + ": " + message, user: null, path: null})
        return this.state
    }

    pushMessage(message) {
        this.state.push({command: message, user: null, path: null})
        return this.state
    }
}
