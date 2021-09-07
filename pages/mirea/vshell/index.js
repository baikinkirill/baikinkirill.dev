import Header from "../../../components/Header";
import {useEffect, useState} from "react";
import commands from "./commands";
export default function Index() {
    return (
        <div>
            <Header/>
            <Terminal/>
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
        window.onresize=()=>{
            this.setState({height: window.innerHeight})
        }
        document.addEventListener("keydown", (e) => {
            if (e.which == 13) {
                let input = document.getElementById("input")
                let buff = input.value
                this.setState({data: this.data.pushCommand(buff)})
                let ans = commands(buff,this.data)
                if(ans[0]==-1){
                    this.setState({data: this.data.pushErrorMessage(ans[1], "bash", "command not found")})
                }else if(ans[0]==1){
                    this.setState({data: this.data.pushMessage(ans[1])})
                }else if(ans[0]==0){}
                setTimeout(() => input.value = "")
                let terminal = document.getElementById("terminal")
                terminal.scrollTo(0, terminal.offsetHeight, {behavior: 'smooth'})
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
                                    {e.command}
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
