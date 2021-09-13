export default function commands(message, dataClass, storage) {

    const regex = /([^\s]*)/gm;
    const str = message
    let m;
    let command = []

    while ((m = regex.exec(str)) !== null) {
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        m.forEach((match, groupIndex) => {
            if (match !== "") {
                command.push(match)
            }
        });
    }
    command[0] = command[0].toString().toLocaleLowerCase();
    if (command.length == 0)
        return [0, 0]
    switch (command[0]) {
        case 'help':
            return [1,`
            ls -- display directory contents
            pwd -- display the current directory
            cat -- read the file
            cd -- change directory
            `]

            break;
        case 'cat':
            if(command[2].toString()[0]==="/")
                command[2] = command[2].toString().replace("/", "")
            buff="";

            buff=buff+dataClass.path
            let arr=command[2].split("/")
            for(var i in arr){
                if(i==arr.length-1){

                }else{
                    buff=buff+"/"+arr[i]
                }
            }
            if(buff[0]==buff[1]&&buff[0]=="/"){
                buff=buff.replace("/","")
            }
            buff=buff.replaceAll("//","/")
            let data=ls(storage,buff)
            if(data==undefined){
                return [-1, command[2], "no such file or directory"]

            }else{
                if(arr[arr.length-1] in data){
                    return [1,data[arr[arr.length-1]]]
                }else{
                    return [-1, command[2], "no such file or directory"]
                }
            }
            break;
        case 'pwd':
            return [1, dataClass.path]
            break;

        case 'cd':
            if (command[2] == undefined)
                command[2] = ""
            if(command[2].toString()[0]==="/")
                command[2] = command[2].toString().replace("/", "")
            if (command[2] == "..") {
                let buff = dataClass.path.toString().split("/")
                let bff = ""
                for (var i = 0; i < buff.length - 2; i++) {
                    if (buff[i] !== "")
                        bff = bff + "/" + buff[i]
                }
                if (bff === "")
                    bff = "/"
                dataClass.path = bff
                return [1, ""]
            } else if (command[2] !== "") {
                let b=checkDir(storage, dataClass.path + command[2])
                if (b==true) {
                    dataClass.path = dataClass.path + command[2] + "/"
                } else if(b==-1) {
                    return [-1, command[2], "is not a directory"]
                }else{
                    return [-1, command[2], "no such file or directory"]
                }

            } else {

            }
            return [1, ""]
            break;
        case 'ls':
            let buff = ""
            let bf = ls(storage, dataClass.path)
            for (var i in bf)
                if (typeof bf[i] !== 'object')
                    buff = buff + i + " "
                else
                    buff = buff + i + "/ "
            return [1, buff]
            break;

        case 'su':
            dataClass.user = command[2]
            return [1, ""]
            break;

        default:
            return [-1, command[0], "command not found"]
            break;
    }
}

function ls(date, path) {
   if(path.toString()[0]==="/")
       path = path.replace("/", "")


    if (path === "")
        return date

    return ls(date[path.split("/")[0]], path.toString().replace(path.split("/")[0], ""))
}

function checkDir(date, path) {
    let buff = ""
    if (path[0] === "/")
        path = path.replace("/", "")
    buff = path.split("/")

    if (buff[0] !== "") {
        if (buff[0] in date || buff[0] + "/" in date){
            if(typeof date[buff[0]] !=="object"){
                return -1
            }
            return checkDir(date[buff[0]], path.replace(buff[0], ""))
        }
        else {
            return false
        }
    }
    if(typeof date !=="object"){
        return -1
    }
    return true
}
